import React from 'react';
import styles from './Footer.module.css';
import { FormattedHTMLMessage } from "react-intl";
import SvgIcon from "@material-ui/core/SvgIcon";
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';

const styleIcon = {
  height: '100%',
  width: '100%',
  color: 'white'
}

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.name}><FormattedHTMLMessage id='footer.name' defaultMessage='Дмитрий Ходаренок' />
        </div>
        <div className={styles.socialIcon}>
          <a href='https://www.linkedin.com/in/dima-khodarenok-632033197/' className={styles.wrapperLincedin}><SvgIcon component={LinkedInIcon} style={styleIcon} /></a>
          <a href='https://www.codewars.com/users/Diminich' className={styles.wrapperCodewars}><SvgIcon component={CodeIcon} style={styleIcon} /></a>
          <a href='https://t.me/Diminichh' className={styles.wrapperTelegram}><SvgIcon component={TelegramIcon} style={styleIcon} /></a>
          <a href='https://github.com/Diminich' className={styles.wrapperGithub}><SvgIcon component={GitHubIcon} style={styleIcon} /></a>
        </div>
        <div className={styles.copywriter}><FormattedHTMLMessage id='footer.rightsReserved' defaultMessage='© 2019 все права защищены' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
