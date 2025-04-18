import confetti from "canvas-confetti";
import React, { useState, useEffect, useRef } from "react";

const TypewriterEffect = ({ text, speed = 50 }) => {
    const [displayedLines, setDisplayedLines] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentText, setCurrentText] = useState("");

    const typeSoundRef = useRef(null);

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const paragraphs = Array.from(doc.body.querySelectorAll("p")).map((p) => p.textContent);

    useEffect(() => {
        if (currentLine >= paragraphs.length) return;

        const text = paragraphs[currentLine];
        if (currentText.length < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prev) => {
                    if (typeSoundRef.current) {
                        typeSoundRef.current.currentTime = 0;
                        typeSoundRef.current.play().catch(() => {});
                    }
                    return prev + text.charAt(prev.length);
                });
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            // Khi đã gõ xong 1 đoạn
            setDisplayedLines((prev) => [...prev, text]);
            setCurrentText("");
            setCurrentLine((prev) => {
                const nextLine = prev + 1;
                if (nextLine === paragraphs.length) {
                    // 🎊 Trigger confetti
                    launchConfetti();
                }
                return nextLine;
            });
        }
    }, [currentText, currentLine, paragraphs, speed]);

    const launchConfetti = () => {
        const duration = 5 * 1000;
        const end = Date.now() + duration;

        const interval = setInterval(() => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 60,
                origin: { x: 0 },
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 60,
                origin: { x: 1 },
            });

            if (Date.now() > end) {
                clearInterval(interval);
            }
        }, 250);
    };

    return (
        <div
            style={{
                whiteSpace: "pre-wrap",
                fontFamily: "monospace",
                fontSize: "18px",
                display: "inline-block",
                textAlign: "left",
                color: "black",
            }}>
            {displayedLines.map((line, idx) => (
                <p key={idx}>{line}</p>
            ))}
            {currentLine < paragraphs.length && (
                <p>
                    {currentText}
                    <span className="cursor">|</span>
                </p>
            )}
            <audio ref={typeSoundRef} src="/sounds/keyboard-typing.wav" preload="auto" />
            <style>{`
                .cursor {
                display: inline-block;
                margin-left: 2px;
                animation: blink 0.8s infinite;
                }
                @keyframes blink {
                0% { opacity: 1; }
                50% { opacity: 0; }
                100% { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default TypewriterEffect;
