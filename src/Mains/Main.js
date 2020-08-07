import React from 'react';
import styles from './Main.module.css';
import {FormattedHTMLMessage} from 'react-intl';

function Main() {
  return (
    <div id='home' className={styles.main}>
      <div className={styles.container}>
        <div className={styles.Greeting}>
          <span className={styles.hello}><FormattedHTMLMessage  id='main.hello' defaultMessage='Привет'/></span>
          <span className={styles.myName}><FormattedHTMLMessage  id='main.name' defaultMessage='Меня зовут Дмитрий Ходаренок.'/></span>
          <span className={styles.font}><FormattedHTMLMessage  id='main.i`m' defaultMessage='Я Front-end разработчик'/></span>
        </div>
        <div className={styles.photo}>
          <img alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
