import React from 'react';
import styles from './Project.module.css';
import {FormattedHTMLMessage} from "react-intl";


function Project() {
    return (
        <div>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <div className={styles.cell1}>
                        <div className={styles.img}>
                            Картинка
                        </div>
                        <button className={styles.button}><FormattedHTMLMessage  id='mySkill.button' defaultMessage='Смотреть'/>
                        </button>
                    </div>
                    <div className={styles.cell2}>
                        <div className={styles.nameProject}>
                          <h2><FormattedHTMLMessage  id='mySkill.nameProject' defaultMessage='Название проекта'/></h2>
                        </div>
                        <div className={styles.descriptionProject}><FormattedHTMLMessage  id='mySkill.projectDescription' defaultMessage='Описание проекта'/>
                        </div>
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.cell1}>
                        <div className={styles.img}>
                            Картинка
                        </div>
                        <button className={styles.button}><FormattedHTMLMessage  id='mySkill.button' defaultMessage='Смотреть'/>
                        </button>
                    </div>
                    <div className={styles.cell2}>
                        <div className={styles.nameProject}>
                          <h2><FormattedHTMLMessage  id='mySkill.nameProject' defaultMessage='Название проекта'/></h2>
                        </div>
                        <div className={styles.descriptionProject}><FormattedHTMLMessage  id='mySkill.projectDescription' defaultMessage='Описание проекта'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;
