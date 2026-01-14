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
  const shapeRef = useRef<HTMLDivElement | null>(null);
  const [TypedText, setTypedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
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

  useEffect(() => {
    // handles loading animation
    if (!isAnimating) {
      return;
    }
    
    const shape = shapeRef.current;
    if (!shape) {
      return;
    }

    // change shape from rectangle -> square -> perfect circle
    let rectangleHeight = shape.offsetHeight;
    let rectangleWidth = shape.offsetWidth;

    const shorterSide = Math.min(rectangleHeight, rectangleWidth);
    shape.style.width = `${shorterSide}px`;
    shape.style.height = `${shorterSide}px`;

    shape.style.borderRadius = `50%`;

    const interval = setInterval(() => {
      // wobbly circle effect by randomising border radius and rotation animation
      let tl, tr, br, bl;
      let min = 0.3;
      let max = 0.7;

      tl = Math.round((Math.random() * (max - min) + min) * 100);
      tr = Math.round((Math.random() * (max - min) + min) * 100);
      br = Math.round((Math.random() * (max - min) + min) * 100);
      bl = Math.round((Math.random() * (max - min) + min) * 100);

      let borderRadius = `${tl}% ${tr}% ${br}% ${bl}%`;
      shape.style.borderRadius = borderRadius;
    }, 1000);

    let timeout = setTimeout(() => {
      // reset shape to perfect circle
      shape.style.borderRadius = `50%`;
      clearInterval(interval);
    }, 11000);
    
    timeout = setTimeout(() => {
      // reset shape to rectangle
      // shape.style.height = `${rectangleHeight}px`;
      // shape.style.width = `${rectangleWidth}px`;
      // shape.style.borderRadius = `10px`;
      shape.style.height = `clamp(300px, calc(1px + 50vh), 700px)`;
      shape.style.width = `clamp(300px, calc(1px + 85vw), 1200px)`;
      shape.style.borderRadius = `10px`;
      
      setIsAnimating(false);
      setCurrentStep(3);

      console.log('navigate');
      // navigate('/MainPage');
    }, 12000)
    

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  

  }, [isAnimating]);

  const RenderText = () => {
    if ( currentStep === 0) {
      return (
        <>
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
        </>
      )
    } else if (currentStep === 1) {
      return <p>Loading...</p>
    } else {
      return <></>
    }
  }

  const handleOnClick = () => {
    setCurrentStep(1);
    setIsAnimating(true);
    
  };

  return (
    <>
      <div className={`${styles.contentContainer}`}>
          <div 
            className={`${styles.bgRectangle} ${isAnimating ? styles.animate : ''}`} 
            ref={shapeRef}
          >
          </div>
          <div className={`${styles.textContainer} ${styles.centeredFlex}`}>
            {RenderText()}

          </div>
        </div>
    </>
  );
};
