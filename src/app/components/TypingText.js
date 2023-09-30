// components/TypingText.js
'use client'
// components/TypingText.js
import React, { useEffect, useState } from 'react';

const TypingText = () => {
  const [dynamicText, setDynamicText] = useState('');
  const words = ["God is good", "a YouTuber", "cool and fun to be with 🤪", "so love Jesus","a developer","an app dev","My name is Abraham Dwamena😇|"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      setDynamicText(currentChar);

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
      } else {
        isDeleting = !isDeleting;

        // Add a pause here before moving to the next word
        if (!isDeleting) {
          setTimeout(() => {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 0); // Start typing the next word immediately
          }, 10000); // Pause for 1 second before moving to the next word
        } else {
          setTimeout(typeEffect, 1200); // Continue typing the current word
        }
      }
    };

    typeEffect();
  }, []);

  return (
    <h1 className="text-4xl md:text-4xl font-semibold text-white text-center md:text-start">
      Welcome to my website::{' '}
      <span className="relative text-red-500">
        {dynamicText}
        <span className="absolute -right-1 md:top-0 h-10 w-1 bg-red-500 animate-pulse"></span>
      </span>
    </h1>
  );
};

export default TypingText;
