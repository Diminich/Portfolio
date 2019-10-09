import React from 'react';
import styles from './MySkill.module.css';

function MySkill() {
  return (
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div>
              <div className={styles.skillImg}>
              </div>
            </div>
            <div className={styles.cell2}>
              react
            </div>
            <span>
              Описание скилла
          </span>
          </div>
          <div className={styles.skill}>
            <div>
              <div className={styles.skillImg}>
              </div>
            </div>
            <div className={styles.cell2}>
              js
            </div>
            <span>
              Описание скилла
          </span>
          </div>
          <div className={styles.skill}>
            <div>
              <div className={styles.skillImg}>
              </div>
            </div>
            <div className={styles.cell2}>
              html
            </div>
            <span>
              Описание скилла
          </span>
          </div>
        </div>
  );
}

export default MySkill;
