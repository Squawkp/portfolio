import React, { useState, useEffect } from 'react';
import styles from '../css/Homepage.module.css';
import { FileDownload, Done } from '@mui/icons-material';

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

  const [isDownloaded, setIsDownloaded] = useState(false);
  
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

  const handleDownloadClick = () => {
    setIsDownloaded(true);
  }

  return (
    <>
        <h1 className={`${styles.pageHeader}`}>
          {/* <span>{word1}</span>
          <span>{word2}</span>
          <span className={`${styles.blinkingCursorAnimation} ${styles.colouredText}`}>{word3}</span> */}
          
          {TypedText}
        </h1>
        <h2 className={`${styles.subHeading}`}>Frontend Developer & UI/UX Designer</h2>
        <a href="src\assets\Christina Tu Resume.pdf" download="Christina Tu Resume" className={`${styles.button}`} onClick={handleDownloadClick}>
          {isDownloaded ? "Downloaded" : "Download Resume"}
          {isDownloaded ? <Done className={`${styles.icon}`}/> : <FileDownload className={`${styles.icon} ${styles.hide}`}/>}
        </a>
    </>
  );
};
