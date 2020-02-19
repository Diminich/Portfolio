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
                            <div className={styles.numberProject}>1</div>
                        </div>
                        <form action='https://diminich.github.io/Portfolio/'>
                            <button className={styles.button}><FormattedHTMLMessage id='mySkill.button'
                                                                                    defaultMessage='Смотреть'/></button>
                        </form>
                    </div>
                    <div className={styles.cell2}>
                        <div className={styles.nameProject}>
                            <h2><FormattedHTMLMessage id='mySkill.nameProjectSocialNetwork' defaultMessage='Social network'/></h2>
                        </div>
                        <div>
                            <FormattedHTMLMessage id='mySkill.projectDescription'
                                                  defaultMessage='React, redux, typescript, classes, hooks, thunk, redux-form, axios,
                                                  flex, styled-components, module css'/>
                        </div>
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.cell1}>
                        <div className={styles.img}>
                            <div className={styles.numberProject}>2</div>
                        </div>
                        <button className={styles.button}><FormattedHTMLMessage id='mySkill.button'
                                                                                defaultMessage='Смотреть'/>
                        </button>
                    </div>
                    <div className={styles.cell2}>
                        <div className={styles.nameProject}>
                            <h2><FormattedHTMLMessage id='mySkill.nameProject' defaultMessage='To do list'/></h2>
                        </div>
                        <div>
                            <FormattedHTMLMessage id='mySkill.projectDescription'
                                                  defaultMessage='React, redux, selectors, classes, thunk, axios, styled-components'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;
