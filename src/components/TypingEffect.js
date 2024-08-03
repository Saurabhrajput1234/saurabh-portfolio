// TypingEffect.js
import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed, resetInterval }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing', 'waiting', or 'clearing'
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    if (phase === 'typing') {
      intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);

        if (index >= text.length - 1) {
          clearInterval(intervalId);
          setPhase('waiting');
        }
      }, speed);
    } else if (phase === 'clearing') {
      intervalId = setInterval(() => {
        setDisplayedText((prev) => prev.slice(0, -1));

        if (displayedText.length === 0) {
          clearInterval(intervalId);
          setPhase('typing');
          setIndex(0);
        }
      }, speed);
    }

    return () => clearInterval(intervalId);
  }, [phase, speed, text, index, displayedText.length]);

  useEffect(() => {
    if (phase === 'waiting') {
      const timer = setTimeout(() => {
        setPhase('clearing');
      }, resetInterval);

      return () => clearTimeout(timer);
    }
  }, [phase, resetInterval]);

  return <p style={{ color: 'white' }}>{displayedText}</p>;
};

export default TypingEffect;
