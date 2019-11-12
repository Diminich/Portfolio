import React from 'react';
import styles from './Skill.module.css';
import MySkill from './MySkill/MySkill';
import {FormattedHTMLMessage} from "react-intl";

function Skill() {
  return (
    <div id='skill' className={styles.skillsBlock}>
      <div className={styles.container}>
        <div className={styles.title}>
            <span><h3><FormattedHTMLMessage  id="mySkill.title" defaultMessage='Мои скилы'/></h3></span>
        </div>
        <MySkill />
      </div>
    </div>
  );
}

export default Skill;
