import React, { useState, useEffect } from 'react';
import styles from '../css/Homepage.module.css';
import { FileDownload, Done } from '@mui/icons-material';

type HomepageProps = {

}

const HEADING_TEXT = `Hi I'm Christina!`;
const COLOUR_INDEX = 7;

export const Homepage: React.FC<HomepageProps> = ({}) => {
  const [TypedText, setTypedText] = useState("");
  const whiteText = TypedText.slice(0, COLOUR_INDEX);
  const purpleText = TypedText.slice(COLOUR_INDEX, HEADING_TEXT.length);

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

  return <>
    <h1 className={`pageHeader`}>
      <span>{whiteText}</span>
      <span className={`colouredText ${styles.blinkingCursorAnimation}`}>
        {purpleText}
      </span>          
    </h1>

    <h2 className={styles.subHeading}>Frontend Developer & UI/UX Designer</h2>

    <a
      href="src\assets\Christina Tu Resume.pdf" download="Christina Tu Resume"
      className={styles.buttonDownload} onClick={handleDownloadClick}
    >
      { isDownloaded
        ? <>
          {'Downloaded'}
          <Done className={styles.icon}/>
        </>
        : <>
          {'Download Resume'}
          <FileDownload className={`${styles.icon} ${styles.hide}`}/>
        </>
      }
    </a>
  </>
};
