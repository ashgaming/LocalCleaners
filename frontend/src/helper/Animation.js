import { useEffect, useState } from "react";



export default function TypeWriter({ texts, typingSpeed = 150, deletingSpeed = 50, pauseTime = 2000 }) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
  
    useEffect(() => {
      let timeout;
  
      if (isTyping) {
        if (displayText !== texts[currentIndex]) {
          timeout = setTimeout(() => {
            setDisplayText(texts[currentIndex].slice(0, displayText.length + 1));
          }, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsTyping(false);
          }, pauseTime);
        }
      } else {
        if (displayText === '') {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        } else {
          timeout = setTimeout(() => {
            setDisplayText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      }
  
      return () => clearTimeout(timeout);
    }, [displayText, currentIndex, isTyping, texts, typingSpeed, deletingSpeed, pauseTime]);
  
    return (
      <span className="inline-block min-h-[1.5em]">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    );
  }