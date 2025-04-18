import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-pink-500 text-white shadow-md absolute w-full fixed bottom-0 left-0">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className="space-x-4">
                        <Link to="/" className="hover:text-pink-200 transition-colors">
                            Trang chủ
                        </Link>
                        <Link to="/love-days" className="hover:text-pink-200 transition-colors">
                            Đếm ngày yêu
                        </Link>
                        <Link to="/birthday" className="hover:text-pink-200 transition-colors">
                            Sinh nhật
                        </Link>
                        <Link to="/photos" className="hover:text-pink-200 transition-colors">
                            Kỷ niệm
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
