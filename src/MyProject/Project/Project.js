import React from 'react';
import styles from './Project.module.css';
import { FormattedHTMLMessage } from "react-intl";


function Project() {
    return (
        <div className={styles.projects}>
            <div className={styles.project}>
                <h2><FormattedHTMLMessage id='mySkill.nameProjectSocialNetwork' defaultMessage='StarWars' /></h2>
                <div className={styles.wrapperImgStarWars}>
                    <div className={styles.imgStarWars} />
                </div>
            </div>

            <div className={styles.project}>
                <h2><FormattedHTMLMessage id='mySkill.nameProject' defaultMessage='ToDoList' /></h2>
                <div className={styles.wrapperImgStarWars}>
                    <div className={styles.img} />
                </div>
            </div>
        </div>
    );
}

export default Project;
