import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Homepage.module.css';
import { ImageCarousel } from '../components/image-carousel';

type HomepageProps = {

}

const HEADING_TEXT = "hi, i'm christina!";
const BEGINNING_INDEX = 4;

export const Homepage: React.FC<HomepageProps> = ({}) => {
  // save darkmode to localStorage
  // const [isDarkModeOn, setIsDarkModeOn] = useState(true);
  
  const navigate = useNavigate();
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [TypedText, setTypedText] = useState("");
  const [isAnimatingRotation, setIsAnimatingRotation] = useState(false);
  
  const start = TypedText.slice(0, BEGINNING_INDEX);
  const end = TypedText.slice(BEGINNING_INDEX, HEADING_TEXT.length);
  
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
    }, 100);

    return () => clearInterval(interval);

  }, []);

  // once full rotation = loading complete
    // switch eclipse to a rectangle shape?
    // button onClick shrinks rectangle to a loading wobbly circle / eclipse
      // text content fades away upwards, replaced by "Loading..." ?
    // switches back to rectangle after loading, showing files to different pages

  // wobbly circle animation by
  // randomising border radius
  // and rotation animation
  useEffect(() => {
    if (!isAnimatingRotation) {
      return;
    }
    
    const circle = circleRef.current;
    if (!circle) {
      return;
    }

    // wobbly circle effect by randomising border radius
    const interval = setInterval(() => {
      let tl, tr, br, bl;
      let min = 0.3;
      let max = 0.7;
      // randomise percentages
      tl = Math.round((Math.random() * (max - min) + min) * 100);
      tr = Math.round((Math.random() * (max - min) + min) * 100);
      br = Math.round((Math.random() * (max - min) + min) * 100);
      bl = Math.round((Math.random() * (max - min) + min) * 100);

      let borderRadius = `${tl}% ${tr}% ${br}% ${bl}%`;
      circle.style.borderRadius = borderRadius;
    }, 750);
    
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setIsAnimatingRotation(false);
      circle.style.borderRadius = `50%`;
      console.log('navigate')
    }, 10000);


    return () => {
    clearInterval(interval);
    clearTimeout(timeout);
  };

  // navigate('/MainPage');

  }, [isAnimatingRotation]);

  const handleOnClick = () => {
    setIsAnimatingRotation(true);
  };

  return (
    <>
      <div className={`${styles.contentContainer}`}>
          <div 
            className={`${styles.circle} ${isAnimatingRotation ? styles.circleRotate : ''}`} 
            ref={circleRef}
          >
          </div>
          <div className={`${styles.textContainer} ${styles.centeredFlex}`}>
            <h1 className={styles.typing}>
              <span>
                {start}
              </span>
              <span className={styles.purpleText}>
                {end}
              </span>
            </h1>
            <p>A Front-End Developer</p>
            <button
              className={`${styles.button} ${styles.centeredFlex}`}
              onClick={handleOnClick}
            >
              Load
            </button>
          </div>
        </div>
    </>
  );
};
