import { Outlet } from "react-router";
import styles from './LayoutMain.module.css';
import { NavMenu } from "./NavMenu/NavMenu.tsx";


export function LayoutMain() {
  return <>
    <div className={`${styles.pageBackground} ${styles.centreContent} ${styles.darkMode}`}>
      <div className={`${styles.mainContentContainer} ${styles.centreContent}`}>
        <NavMenu/>
        <Outlet/>
      </div>
    </div>
  </>
};
