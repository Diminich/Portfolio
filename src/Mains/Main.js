import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.Greeting}>
          <span>Привет!</span>
          <span>Меня зовут Дима Ходаренок.</span>
          <span>Я Front-end разработчик</span>
        </div>
        <div className={styles.photo}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
