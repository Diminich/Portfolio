import React from 'react';
import styles from './MySkill.module.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faReact, fab, faHtml5, faCss3Alt, faJs} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(fab, faReact, faHtml5, faCss3Alt, faJs);

function MySkill() {
    return (
        <div className={styles.skills}>
            <div className={styles.skill}>
                <div>
                    <div className={styles.skillImgs}>
                        <FontAwesomeIcon className={styles.icon} icon={faReact}/>
                    </div>
                </div>
                <div className={styles.nameSkill}>
                    <h3>REACT</h3>
                </div>
            </div>

            <div className={styles.skill}>
                <div>
                    <div className={styles.skillImgs}>
                        <FontAwesomeIcon className={styles.icon} icon={faHtml5}/>
                    </div>
                </div>
                <div className={styles.nameSkill}>
                    <h3>HTML</h3>
                </div>
            </div>

            <div className={styles.skill}>
                <div>
                    <div className={styles.skillImgs}>
                        <FontAwesomeIcon className={styles.icon} icon={faCss3Alt}/>
                    </div>
                </div>
                <div className={styles.nameSkill}>
                    <h3>CSS</h3>
                </div>
            </div>

            <div className={styles.skill}>
                <div>
                    <div className={styles.skillImgs}>
                        <FontAwesomeIcon className={styles.icon} icon={faJs}/>
                    </div>
                </div>
                <div className={styles.nameSkill}>
                    <h3>JS</h3>
                </div>
            </div>

            <div className={styles.skill}>
                <div className={styles.nameSkillTypeScript}>
                    <div className={styles.typeScriptImg}>
                    </div>
                    <h3>TS</h3>
                </div>
            </div>
        </div>
    );
}

export default MySkill;
