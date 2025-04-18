import BirthdayScene from "../components/BirthdayScene";
import TypewriterEffect from "../components/TypewriterEffect";

export default function Birthday() {
    const longText = `<p>Em bé ơi!</p>
    <p>Chúc mừng sinh nhật em bé iu dấu của anh nhooooo ❤️❤️❤️❤️❤️❤️</p>
    <p>Sang tuổi mới, anh chúc em bé luôn tươi như hoa, cười rạng rỡ mỗi ngày như bây giờ nè. Chúc bé luôn khỏe mạnh như một chú mèo con, tâm hồn bình yên như mặt hồ mùa thu và đặc biệt là... mãi mãi ở bên cạnh anh nhaaa 👉👈.</p>
    <p>Mùa hè "cháy phố" sắp đến rồi, em bé nhớ giữ gìn sức khỏe thật tốt để "chinh chiến" deadline sale nha. iếm thật nhiều "xiền" để còn "nuôi" anh nữa chứ nhỉ? 🤣</p>
    <p>Anh iu em bé nhấttttttt óooooooóoooooo</p>`;

    return (
        <div className="flex flex-col min-h-screen">
            <div className="p-4 text-center flex-1">
                <TypewriterEffect text={longText} speed={75} />
            </div>

            <BirthdayScene />
        </div>
    );
}
