import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>Контакты</span>
        </div>
        <form>
          <input className={styles.input}></input>
          <input className={styles.input}></input>
          <textarea className={styles.message}></textarea>
          <button type='submit' className={styles.button}>
            Отправить
        </button>
        </form>

        {/* <div className={styles.contacts}>
          Контакты
        </div>
        <div className={styles.cell1}>
          <input className={styles.input}></input>
          <input className={styles.input}></input>
        </div>
        <button className={styles.button}>
          Отправить
        </button> */}
      </div>
    </div>
  );
}

export default Contact;
