import { Outlet } from "react-router";
import styles from './LayoutMain.module.css';
import { Navbar } from './Navbar/Navbar';

export function LayoutMain() {

  return (
    <>
      <div className={`${styles.pageBackground} ${styles.centreContent} ${styles.darkMode}`}>
        <div className={`${styles.mainContentContainer} ${styles.centreContent}`}>
          <Navbar/>
          <Outlet/>
        </div>
      </div>
    </>
  );
};
