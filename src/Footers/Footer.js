import React from 'react';
import styles from './Footer.module.css';
import linkedinIcon from './../Img/linkedin.svg';
import vkIcon from './../Img/vk.svg'
import telegramIcon from './../Img/telegram.svg'
import gitHubIcon from './../Img/github-big-logo.svg'
import {FormattedHTMLMessage} from "react-intl";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.name}><FormattedHTMLMessage  id='footer.name' defaultMessage='Дмитрий Ходаренок'/>

        </div>
        <div className={styles.socialIcons}>
          <a className={styles.socialIcon} href='https://www.linkedin.com/in/dima-khodarenok-632033197/'><img src={linkedinIcon} className={styles.linkedin} /></a>
          <a className={styles.socialIcon} href='https://vk.com/id253247787'><img src={vkIcon} className={styles.in} /></a>
          <a className={styles.socialIcon} href='https://t.me/Diminichh'><img src={telegramIcon} className={styles.in} /></a>
          <a className={styles.socialIcon} href='https://github.com/Diminich'><img src={gitHubIcon} className={styles.in} /></a>
        </div>
        <div className={styles.copywriter}><FormattedHTMLMessage  id='footer.rightsReserved' defaultMessage='© 2019 все права защищены'/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
