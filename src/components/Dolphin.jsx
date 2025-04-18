import React, { useEffect, useRef } from "react";

const Dolphin = ({ src = "dolphin.png", width = 100 }) => {
    const dolphinRef = useRef(null);

    useEffect(() => {
        let posX = -150; // vị trí x ban đầu, ngoài màn hình bên trái
        let baseY = 0; // Sẽ được tính từ chiều cao của phần tử cha
        // let baseY = window.innerHeight / 2; // vị trí y cơ sở, ở giữa chiều cao màn hình
        let currentYOffset = 0; // offset hiện tại theo trục Y
        let targetYOffset = getRandomOffset();
        let changeInterval = 4000; // thời gian giữa mỗi lần cập nhật target offset (ms)
        let lastChange = Date.now();
        let lastYOffset = currentYOffset;
        const speed = 1; // tốc độ di chuyển (pixel mỗi frame)

        // Hàm trả về giá trị offset ngẫu nhiên trong khoảng -50 đến 50 pixel
        function getRandomOffset() {
            return Math.random() * 100 - 50;
        }

        function animate() {
            if (!dolphinRef.current) return;

            // Lấy phần tử cha và kích thước của nó
            const parent = dolphinRef.current.parentElement;
            const parentRect = parent.getBoundingClientRect();
            baseY = parentRect.height / 2; // Canh giữa theo trục Y trong khung cha

            // Cập nhật vị trí x di chuyển sang bên phải
            posX += speed;

            const now = Date.now();
            // Cập nhật targetYOffset nếu đã qua khoảng changeInterval
            if (now - lastChange > changeInterval) {
                targetYOffset = getRandomOffset();
                changeInterval = 1000 + Math.random() * 2000; // ngẫu nhiên khoảng 1 - 3 giây
                lastChange = now;
            }

            // Tạo hiệu ứng mượt: chuyển currentYOffset dần về targetYOffset
            currentYOffset += (targetYOffset - currentYOffset) * 0.02;
            const deltaYOffset = currentYOffset - lastYOffset;
            lastYOffset = currentYOffset;
            // Tính góc quay dựa trên sự thay đổi của offset và tốc độ di chuyển
            const angle = Math.atan2(deltaYOffset, speed) * (180 / Math.PI);

            // Reset vị trí nếu vượt quá màn hình
            if (posX > window.innerWidth + 150) {
                posX = -150;
            }

            // Cập nhật thuộc tính transform cho hình ảnh
            if (dolphinRef.current) {
                dolphinRef.current.style.transform = `translate(${posX}px, ${
                    baseY + currentYOffset
                }px) rotate(${angle}deg)`;
            }

            // Yêu cầu trình duyệt gọi animate ở frame tiếp theo
            requestAnimationFrame(animate);
        }

        // Cập nhật lại vị trí cơ sở trục Y khi kích thước cửa sổ thay đổi
        const handleResize = () => {
            if (dolphinRef.current) {
                const parentRect = dolphinRef.current.parentElement.getBoundingClientRect();
                baseY = parentRect.height / 2;
            }
        };

        window.addEventListener("resize", handleResize);
        requestAnimationFrame(animate);

        // Cleanup sự kiện khi component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <img
            ref={dolphinRef}
            src={src}
            alt="Dolphin"
            style={{
                position: "absolute",
                width: width,
                willChange: "transform",
                top: "30px",
            }}
            className="dolphin"
        />
    );
};

export default Dolphin;
