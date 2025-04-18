import React, { useEffect, useRef } from "react";

const DolphinOcean = () => {
    const oceanRef = useRef(null);

    useEffect(() => {
        const spawnDolphin = () => {
            const dolphin = document.createElement("div");
            dolphin.classList.add("dolphin");

            // Vị trí top ngẫu nhiên (0–80%)
            const topPercent = Math.random() * 80;
            dolphin.style.top = `${topPercent}%`;

            // Thời gian bơi ngẫu nhiên (5–10 giây)
            const duration = 5 + Math.random() * 5;
            dolphin.style.animationDuration = `${duration}s`;

            oceanRef.current.appendChild(dolphin);

            // Xóa cá heo sau animation
            dolphin.addEventListener("animationend", () => {
                dolphin.remove();
            });
        };

        const interval = setInterval(spawnDolphin, 1500);
        return () => clearInterval(interval); // Cleanup khi unmount
    }, []);

    return <div className="ocean" ref={oceanRef}></div>;
};

export default DolphinOcean;
