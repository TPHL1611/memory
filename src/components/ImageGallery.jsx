function ImageGallery({ photos }) {
    // Hàm để tạo URL dựa trên loại và ID ảnh
    const getImageUrl = (photo) => {
        switch (photo.type) {
            case "gdrive":
                return `https://drive.google.com/uc?id=${photo.imageId}`;
            case "onedrive":
                return `https://api.onedrive.com/v1.0/shares/s!${photo.imageId}/root/content`;
            case "gphotos":
                return `https://photos.app.goo.gl/${photo.imageId}`;
            default:
                return photo.imageId; // Nếu đã là URL đầy đủ
        }
    };
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
                <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        src={getImageUrl(photo)}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                        loading="lazy" // Thêm lazy loading
                    />
                    <div className="p-4">
                        <h3 className="font-bold text-lg text-pink-600">{photo.title}</h3>
                        <p className="text-gray-600 text-sm">{photo.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ImageGallery;
