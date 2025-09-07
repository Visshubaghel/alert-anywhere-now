import React, { useState, useEffect } from 'react';

const TypingAnimation: React.FC = () => {
  const phrases = [
    "Compare prices instantly.",
    "Get instant price alerts.",
    "Find the best deal.",
    "Never overpay again."
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
      if (currentText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [currentText, isTyping, currentPhraseIndex, phrases]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight min-h-[1.2em]">
        {currentText}
        <span className={`inline-block w-1 h-16 bg-purple-600 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
      </h1>
    </div>
  );
};

export default TypingAnimation;