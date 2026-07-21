import styles from '../NavMenu/NavMenu.module.css'
import { NavLink } from 'react-router-dom';
import { Menu, Close, Email } from '@mui/icons-material';
import { MarkGithubIcon } from '@primer/octicons-react';
import { useState } from 'react';

const NAV_ITEMS = [
  { url: '/', label: 'Home'},
  { url: 'projects', label: 'Projects'},
  { url: 'about-me', label: 'About Me'},
];

export function NavMenu() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  function handleOnClick() {
    setIsOpen(!isOpen);
  }

  return <>
  { isMobile
    ? <>
      { isOpen
        ? <div className={styles.navContainer}>
            <div className={styles.navMenu}>
              <Close className={styles.navMenu__icon} onClick={() => handleOnClick()}/>
              <NavBar handleOnClick={handleOnClick}/>
              {/* TODO ADD CONTACTS / EMAIL */}
              <div className={styles.contactFlex}>
                <MarkGithubIcon size={24}/>
                <Email className={styles.contact__icon}/>
              </div>
            </div>
        </div>
        : <Menu className={styles.navMenu__iconOpen} onClick={() => handleOnClick()}/>
      }
    </>
    : <NavBar/>
  }
  </>
};

function getStyleClass({ isActive }: { isActive: boolean }) {
  return isActive ? styles.active : styles.link;
}

function NavBar({
  handleOnClick,
}: {
  handleOnClick?: () => void
}) {
  return <>
    <nav className={styles.navFlex}>
      {NAV_ITEMS.map(({ url, label }) => {
        return <>
          <NavLink
            key={url}
            to={url}
            className={getStyleClass}
            onClick={() => handleOnClick ? handleOnClick() : null}
          >
            <p>{label}</p>
          </NavLink>
        </>
      })}
    </nav>
  </>
}
