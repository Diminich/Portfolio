import React from 'react';
import styles from './Header.module.css';
import NavMenu from './NavMenus/NavMenu';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
        <NavMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
