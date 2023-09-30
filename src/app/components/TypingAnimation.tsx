'use client'
import { useEffect, useState } from "react";

export default function TypingAnimation() {
  const texts: string[] = ["Type this text.", "Then erase it.", "Now type something different."];
  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [currentText, setCurrentText] = useState<string>("");

  useEffect(() => {
    const typingSpeed: number = 300; // Very slow typing speed
    const erasingSpeed: number = 300; // Very slow erasing speed
    const delayBeforeTypingNextText: number = 5000; // Longer delay
    const delayBetweenLoops: number = 5000; // Add delay between loops

    const typeText = () => {
      if (isTyping) {
        if (charIndex < texts[textIndex].length) {
          setCurrentText((prevText) => prevText + texts[textIndex].charAt(charIndex));
          setCharIndex((prevCharIndex) => prevCharIndex + 1);
          setTimeout(typeText, typingSpeed);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCharIndex(0);
            setTextIndex((prevTextIndex) => (prevTextIndex + 1) % texts.length);
            setCurrentText("");
            setTimeout(typeText, typingSpeed);
          }, delayBetweenLoops);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prevText) => prevText.slice(0, -1));
          setCharIndex((prevCharIndex) => prevCharIndex - 1);
          setTimeout(typeText, erasingSpeed);
        } else {
          setIsTyping(true);
          setTextIndex((prevTextIndex) => (prevTextIndex + 1) % texts.length);
          setTimeout(typeText, delayBeforeTypingNextText);
        }
      }
    };

    // Start the typing animation
    typeText();
  }, [charIndex, isTyping, textIndex]);

  return (
    <div className="text-center my-8">
      <div className="text-2xl font-bold text-gray-800">
        {currentText}
        <span className="ml-1 text-blue-500 animate-blink">|</span>
      </div>
    </div>
  );
}
