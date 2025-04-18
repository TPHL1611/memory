import React, { useEffect, useRef } from "react";

const CakeFloating = ({ src = "/images/birthday-cake.svg", width = 150 }) => {
    const cakeRef = useRef(null);

    useEffect(() => {
        // Các biến offset để tạo hiệu ứng lơ lửng
        let currentOffsetX = 0;
        let currentOffsetY = 0;
        let targetOffsetX = getRandomOffset();
        let targetOffsetY = getRandomOffset();

        // Khoảng thời gian sau đó cập nhật mục tiêu offset mới (ms)
        let changeInterval = 3000;
        let lastChange = Date.now();

        // Hàm trả về offset ngẫu nhiên giữa -10 và 10 pixel
        function getRandomOffset() {
            return Math.random() * 20 - 10;
        }

        function animate() {
            const now = Date.now();

            // Cập nhật target offset sau mỗi khoảng thời gian nhất định
            if (now - lastChange > changeInterval) {
                targetOffsetX = getRandomOffset();
                targetOffsetY = getRandomOffset();
                changeInterval = 3000 + Math.random() * 2000; // từ 3 đến 5 giây
                lastChange = now;
            }

            // Cập nhật offset hiện tại tiến dần về target (sử dụng hệ số nhỏ để chuyển động mượt)
            currentOffsetX += (targetOffsetX - currentOffsetX) * 0.01;
            currentOffsetY += (targetOffsetY - currentOffsetY) * 0.01;

            // Thêm dao động nhẹ theo thời gian để tạo cảm giác tự nhiên hơn (oscillation)
            const time = now / 1000; // chuyển đổi sang giây
            const oscillationX = Math.sin(time * 0.5) * 2; // biên độ 2px
            const oscillationY = Math.cos(time * 0.5) * 2; // biên độ 2px

            // Kết hợp transform căn giữa (translate(-50%, -50%)) với chuyển dịch lơ lửng
            if (cakeRef.current) {
                cakeRef.current.style.transform = `translate(-50%, -50%) translate(${
                    currentOffsetX + oscillationX
                }px, ${currentOffsetY + oscillationY}px)`;
            }

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }, []);

    return (
        <img
            ref={cakeRef}
            src={src}
            alt="Cake"
            style={{
                position: "absolute",
                width: width,
                top: "50%",
                left: "50%",
                willChange: "transform",
            }}
        />
    );
};

export default CakeFloating;
