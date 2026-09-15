import styles from '../css/AboutMe.module.css';
import { useEffect, useState } from 'react';
import { SkillSection } from '../components/SkillSection';

const HEADER_TEXT: string = 'Hi! I’m a computer science graduate specialising in frontend development with a passion for creating polished, intuitive user interfaces and experiences. Currently based in Sydney Australia.'

export function AboutMe() {
  
  const [isVertical, setIsVertical]
    = useState<boolean>(window.screen.orientation.type.includes('portrait') ? true : false);
    console.log(window.screen.orientation.type);
    // TODO: WHY DOES LANDSCAPE STILL LOG PORTRAIT?
    console.log(isVertical);

    const [activeSection, setActiveSection] = useState<string>('Experience');
    // 
  
  // track orientation
  // TODO: HOW COME THIS WORKS WHEN CHANGES FROM FULL BROWSER TO DEV TOOLS MOBILE SIZE
  // BUT NOT WHEN SWITCHING DEVICES ITSELF WITHIN DEV TOOLS
  // EVENT LISTENER NOT WORKING?
  useEffect(() => {
    const handleOrientationChange = () => {
      const orientation: string = window.screen.orientation.type;
      console.log(orientation)
      orientation.includes('portrait') ? setIsVertical(true) : setIsVertical(false);
      console.log(orientation);
    }
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    }
  }, []);

  return <>
    <div className={styles.header}>
      <h1 className={`${styles.header__title} pageHeader`}>
        About Me
      </h1>
      <p className={`${styles.header__text}`}>
        {HEADER_TEXT}
      </p>
    </div>
    <div className={styles.flex}>
      {/* ADD ACCORDIAN HERE */}
      {isVertical
        ? <>
          <div className={styles.flex__child}>
            <SkillSection sectionHeading={'Experience'} isVertical={isVertical}/>
          </div>
          <div className={styles.flex__child}>
            <SkillSection sectionHeading={'Education'} isVertical={isVertical}/>
          </div>
          <div className={styles.flex__child}>
            <SkillSection sectionHeading={'Skills'} isVertical={isVertical}/>
          </div>
        </>
        : <>
          <div className={styles.flex__child}>
            <SkillSection sectionHeading={'Experience'} isVertical={isVertical}/>
            <SkillSection sectionHeading={'Education'} isVertical={isVertical}/>
          </div>
          <div className={styles.flex__child}>
            <SkillSection sectionHeading={'Skills'} isVertical={isVertical}/>
          </div>
        </>
      }
    </div>
  </>
};
