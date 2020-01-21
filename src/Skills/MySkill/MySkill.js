import React from 'react';
import styles from './MySkill.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faReact, fab, faHtml5, faCss3Alt, faJs, } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <div className={styles.cell2}>
                    <h3>react</h3>
                </div>
                <span className={styles.descriptioSkills}>
          </span>
            </div>

            <div className={styles.skill}>
                <div>
                    <div className={styles.skillImgs}>
                        <FontAwesomeIcon className={styles.icon} icon={faHtml5}/>
                       </div>
                </div>
                <div className={styles.cell2}>
                    <h3>html</h3>
                </div>
                <span className={styles.descriptioSkills}>
          </span>
            </div>

            <div className={styles.skill}>
                <div>
                    <div className={styles.skillImgs}>
                        <FontAwesomeIcon className={styles.icon} icon={faCss3Alt}/>
                        </div>
                </div>
                <div className={styles.cell2}>
                    <h3>css</h3>
                </div>
                <span className={styles.descriptioSkills}>
          </span>
            </div>

            <div className={styles.skill}>
                <div>
                    <div className={styles.skillImgs}>
                        <FontAwesomeIcon className={styles.icon} icon={faJs}/>
                       </div>
                </div>
                <div className={styles.cell2}>
                    <h3>js</h3>
                </div>
                <span className={styles.descriptioSkills}>
          </span>
            </div>
        </div>
    );
}

export default MySkill;
