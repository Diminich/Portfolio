import React from 'react';
import styles from './Project.module.css';
import {FormattedHTMLMessage} from "react-intl";


function Project() {
    return (
            <div className={styles.projects}>
                <div className={styles.project}>
                    <div className={styles.imgButtonProject}>
                        <div className={styles.img}>
                            <div className={styles.numberProject}>1</div>
                        </div>
                        <form action='https://diminich.github.io/StarWars/'>
                            <button className={styles.button}><FormattedHTMLMessage id='mySkill.button'
                                                                                    defaultMessage='Смотреть'/></button>
                        </form>
                    </div>
                    <div className={styles.projectDescription}>
                        <div className={styles.nameProject}>
                            <h2><FormattedHTMLMessage id='mySkill.nameProjectSocialNetwork'
                                                      defaultMessage='StarWars'/></h2>
                        </div>
                        <div>
                            <FormattedHTMLMessage id='mySkill.projectDescription'
                                                  defaultMessage='Rest api, react, redux, hooks, thunk, antd, axios,
                                                  flex, styled-components, module css'/>
                        </div>
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.imgButtonProject}>
                        <div className={styles.img}>
                            <div className={styles.numberProject}>2</div>
                        </div>
                        <form action='https://diminich.github.io/ToDoList/'>
                            <button className={styles.button}><FormattedHTMLMessage id='mySkill.button'
                                                                                    defaultMessage='Смотреть'/>
                            </button>
                        </form>
                    </div>
                    <div className={styles.projectDescription}>
                        <div className={styles.nameProject}>
                            <h2><FormattedHTMLMessage id='mySkill.nameProject' defaultMessage='ToDoList'/></h2>
                        </div>
                        <div>
                            <FormattedHTMLMessage id='mySkill.projectDescription'
                                                  defaultMessage='React, redux, selectors, classes, thunk, axios, styled-components'/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Project;
