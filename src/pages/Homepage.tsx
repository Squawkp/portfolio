import React, { useState, useEffect } from 'react';
import styles from '../css/Homepage.module.css';

type HomepageProps = {

}

const HEADING_TEXT = `Hi I'm Christina!`;
const FIRST_INDEX = 3;
const LAST_INDEX = 7;

export const Homepage: React.FC<HomepageProps> = ({}) => {
  const [TypedText, setTypedText] = useState("");
  const word1 = TypedText.slice(0, FIRST_INDEX);
  const word2 = TypedText.slice(FIRST_INDEX, LAST_INDEX);
  const word3 = TypedText.slice(LAST_INDEX, HEADING_TEXT.length);
  
  useEffect(() => {
    // type one char every tick
    const interval = setInterval(() => {
      setTypedText(prev => {
        const nextChar = HEADING_TEXT[prev.length];
        if (!nextChar) {
          clearInterval(interval);
          return prev;
        }
        const newString = prev + nextChar;
        return newString;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`${styles.pageBackground} ${styles.centreContent} ${styles.darkMode}`}>
        <div className={`${styles.mainContentContainer} ${styles.centreContent}`}>
          <h1 className={`${styles.TypingFont}`}>
            <span>{word1}</span>
            <span>{word2}</span>
            <span className={`${styles.blinkingCursorAnimation} ${styles.colouredText}`}>{word3}</span>
          </h1>
          <h2>Frontend Developer</h2>
          <h2>& UI/UX Designer</h2>
        </div>
      </div>
    </>
  );
};
