import React from 'react';
import styles from './DistantProjects.module.css';
import {FormattedHTMLMessage} from "react-intl";

function DistantProjects  ()  {
  return (
    <div className={styles.distantProjects}>
      <div className={styles.container}>
          <h3 className={styles.workOptions}><FormattedHTMLMessage  id='distantProject.title' defaultMessage='Рассматриваю варианты удаленной работы'/></h3>
        <button className={styles.buttons}><FormattedHTMLMessage  id='distantProject.button' defaultMessage='Смотреть'/>
        </button>
      </div>
    </div>
  );
}

export default DistantProjects;
