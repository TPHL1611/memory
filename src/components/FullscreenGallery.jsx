import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

function FullscreenGallery({ photos }) {
    const splideRef = useRef(null);

    // Hàm để tạo URL dựa trên loại và ID ảnh
    const getImageUrl = (photo) => {
        switch (photo.type) {
            case "gdrive":
                return `https://drive.google.com/uc?id=${photo.imageId}`;
            case "onedrive":
                return `https://api.onedrive.com/v1.0/shares/s!${photo.imageId}/root/content`;
            case "gphotos":
                return `https://lh3.googleusercontent.com/d/${photo.imageId}`;
            default:
                return photo.imageId;
        }
    };

    useEffect(() => {
        if (splideRef.current && photos.length > 0) {
            const splide = new Splide(splideRef.current, {
                type: "loop",
                direction: "ttb", // top-to-bottom (vertical)
                height: "100vh",
                wheel: true, // enable mouse wheel
                waitForTransition: true,
                arrows: false,
                pagination: false,
                drag: true,
                autoHeight: true,
                speed: 800, // Tốc độ chuyển slide (ms)
                easing: "cubic-bezier(0.25, 1, 0.5, 1)", // Hiệu ứng chuyển động
                interval: 0, // Không tự động chuyển
                rewind: false,
                swipeThreshold: 100, // Độ nhảy khi vuốt
                dragMinThreshold: 10, // Độ nhạy khi vuốt
                flickPower: 500, // Lực khi vuốt nhanh
            });

            splide.mount();

            return () => {
                splide.destroy();
            };
        }
    }, [photos]);

    if (photos.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-pink-600 text-xl">Không có ảnh nào</p>
            </div>
        );
    }

    return (
        <div className="h-screen bg-black relative">
            <div className="splide" ref={splideRef}>
                <div className="splide__track">
                    <ul className="splide__list">
                        {photos.map((photo) => (
                            <li key={photo.id} className="splide__slide">
                                <div className="flex flex-col h-screen">
                                    <div className="flex-grow flex items-center justify-center">
                                        <img
                                            src={getImageUrl(photo)}
                                            alt={photo.title}
                                            className="max-h-[80vh] max-w-full object-contain"
                                        />
                                    </div>

                                    <div className="bg-gradient-to-t from-black to-transparent p-4 text-white">
                                        <h3 className="text-xl font-bold">{photo.title}</h3>
                                        <p className="text-gray-300">{photo.date}</p>
                                        {photo.description && (
                                            <p className="text-gray-200 mt-2">
                                                {photo.description}
                                            </p>
                                        )}
                                        <div className="absolute bottom-24 right-6 flex flex-col items-center">
                                            <button className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                                                <span>❤️</span>
                                            </button>
                                            <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                                                <span>💬</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 opacity-20">
                <div className="animate-bounce">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default FullscreenGallery;
