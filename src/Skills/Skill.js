import React from 'react';
import styles from './Skill.module.css';
import MySkill from './MySkill/MySkill';

function Skill() {
  return (
    <div className={styles.skillsBlock}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>Мои скилы</span>
        </div>
        <MySkill />
      </div>
    </div>
  );
}

export default Skill;
