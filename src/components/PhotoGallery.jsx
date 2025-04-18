import { useState, useEffect } from "react";
import FullscreenGallery from "./FullscreenGallery";

function PhotoGallery() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch("/photos.json");

                if (!response.ok) {
                    throw new Error("Không thể tải dữ liệu ảnh");
                }

                const data = await response.json();
                console.log(data.photos);

                setPhotos(data.photos);
                setLoading(false);
            } catch (err) {
                console.error("Error loading photos:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-xl text-pink-600">Đang tải album ảnh...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-xl text-red-600">Có lỗi: {error}</div>
            </div>
        );
    }

    return <FullscreenGallery photos={photos} />;
}

export default PhotoGallery;
