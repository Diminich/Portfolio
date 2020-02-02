import React from 'react';
import styles from './NavMenu.module.css';
import {FormattedHTMLMessage} from 'react-intl';

function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <a href="#home" className={styles.link}> <FormattedHTMLMessage  id="header.home" defaultMessage='Главная'/></a>
            <a href="#skill" className={styles.link}> <FormattedHTMLMessage  id="header.skill" defaultMessage='Скиллы'/></a>
            <a href="#project" className={styles.link}> <FormattedHTMLMessage  id="header.project" defaultMessage='Проекты'/></a>
            <a href="#contact" className={styles.link}> <FormattedHTMLMessage  id="header.contact" defaultMessage='Контакты'/></a>
        </div>
    )
}

export default NavMenu;