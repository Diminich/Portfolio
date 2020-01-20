import React from 'react';
import styles from './Footer.module.css';
import {FormattedHTMLMessage} from "react-intl";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.name}><FormattedHTMLMessage  id='footer.name' defaultMessage='Дмитрий Ходаренок'/>

        </div>
        <div className={styles.socialIcons}>
          <a className={styles.iconLinkedIn} href='https://www.linkedin.com/in/dima-khodarenok-632033197/'/>
          <a className={styles.iconVk} href='https://vk.com/id253247787' />
          <a className={styles.iconTelegramm} href='https://t.me/Diminichh' />
          <a className={styles.iconGitHub} href='https://github.com/Diminich' />
        </div>
        <div className={styles.copywriter}><FormattedHTMLMessage  id='footer.rightsReserved' defaultMessage='© 2019 все права защищены'/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
