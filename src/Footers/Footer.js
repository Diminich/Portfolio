import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div>
          Дима Ходаренок
        </div>
        <div className={styles.socialIcons}>
          <div className={styles.socialIcon}></div>
          <div className={styles.socialIcon}></div>
          <div className={styles.socialIcon}></div>
          <div className={styles.socialIcon}></div>
        </div>
        <div>
          © 2019 все права защищены
        </div>
      </div>
    </div>
  );
}

export default Footer;
