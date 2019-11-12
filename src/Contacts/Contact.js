import React from 'react';
import styles from './Contact.module.css';
import {FormattedHTMLMessage} from "react-intl";

function Contact() {
  return (
    <div id='contact' className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span><h3><FormattedHTMLMessage  id='contact.title' defaultMessage='Контакты'/></h3></span>
        </div>
        <form>
          <input placeholder='Name' className={styles.input}></input>
          <input placeholder='Email' className={styles.input}></input>
          <textarea placeholder='Message' className={styles.message}></textarea>
          <button type='submit' className={styles.button}><FormattedHTMLMessage  id='contact.button' defaultMessage='Отправить'/>
        </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
