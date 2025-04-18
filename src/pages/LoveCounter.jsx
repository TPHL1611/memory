import { useState } from "react";
import { formatDistance } from "date-fns";
import { FaHeart } from "react-icons/fa";

export default function LoveCounter() {
    const [startDate] = useState(new Date("2024-09-02")); // Thay đổi ngày bắt đầu

    const daysTogether = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24));

    return (
        <div className="p-4 flex h-screen justify-center flex-col">
            <div className="bg-pink-100 p-6 rounded-xl text-center">
                <FaHeart className="text-4xl text-pink-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-pink-700 mb-2">{daysTogether} ngày</h2>
                <p className="text-gray-600">
                    Kể từ {formatDistance(startDate, new Date(), { addSuffix: true })}
                </p>
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm">
                Mỗi ngày bên nhau là một ngày hạnh phúc ❤️
            </div>
            <p>Boy IT kiếm tiền</p>
            <p>Girl du lịch kiếm chiện</p>
        </div>
    );
}
