import { useState, useEffect } from 'react';

export function useTypewriter(
  texts: string[],
  speed: number = 50,
  delayBetweenTexts: number = 1000,
  loop: boolean = true
) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const isComplete = currentCharIndex === currentText.length;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && !isComplete) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, speed);
    } else if (isComplete && !isDeleting) {
      // Wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTexts);
    } else if (isDeleting && currentCharIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
      }, speed / 2);
    } else if (isDeleting && currentCharIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      const nextIndex = (currentTextIndex + 1) % texts.length;
      
      if (nextIndex === 0 && !loop) {
        setCurrentTextIndex(0);
        setCurrentCharIndex(texts[0].length);
        setDisplayedText(texts[0]);
      } else {
        setCurrentTextIndex(nextIndex);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentTextIndex, isDeleting, texts, speed, delayBetweenTexts, loop]);

  return displayedText;
}
