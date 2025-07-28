import React from 'react';
import styles from '../css/Homepage.module.css';

type HomepageProps = {

}

export const Homepage: React.FC<HomepageProps> = ({}) => {

  return (
      <div id={styles.contentContainer} className={styles.centeredFlex}>
        <div id={styles.eclipse} className={styles.centeredFlex}>
          <div className={`${styles.textContainer} ${styles.centeredFlex}`}>
            <h1>
              <span>hi, </span>
              <span className={styles.purpleText}>I'm Christina!</span>
            </h1>
            <p>Front-End Developer</p>
            <div className={`${styles.buttonContainer} ${styles.centeredFlex}`}>Button</div>
          </div>
        </div>
      </div>
  );
};
