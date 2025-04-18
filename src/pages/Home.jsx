import { FiHeart, FiGift, FiImage } from "react-icons/fi";
import { Link } from "react-router-dom";
function Home() {
    const menuItems = [
        {
            path: "/love-days",
            name: "Đếm ngày yêu",
            icon: <FiHeart className="text-xl" />,
        },
        {
            path: "/birthday",
            name: "Sinh nhật",
            icon: <FiGift className="text-xl" />,
        },
        {
            path: "/photos",
            name: "Kỷ niệm",
            icon: <FiImage className="text-xl" />,
        },
    ];
    return (
        <div className="container mx-auto px-4 py-8">
            {/* <div className="text-center">
                <h1 className="text-3xl font-bold text-pink-600 mb-6">
                    Chào mừng đến với câu chuyện của chúng mình
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Nơi lưu giữ những khoảnh khắc đẹp nhất của chúng ta
                </p>

                <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="/placeholder-couple.jpg"
                        alt="Chúng mình"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                        <p className="text-gray-700">
                            Hãy cùng nhau xem lại những khoảnh khắc tuyệt vời mà chúng ta đã trải
                            qua và đếm từng ngày bên nhau.
                        </p>
                    </div>
                </div>
            </div> */}
            <div className="p-4">
                <h1 className="text-2xl font-bold text-pink-600 text-center mb-8">
                    ❤️ Kỉ niệm của 2 đứa
                </h1>

                <div className="space-y-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center p-4 bg-white text-black rounded-lg shadow hover:shadow-md transition-all">
                            <span className="mr-3 text-pink-500">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
