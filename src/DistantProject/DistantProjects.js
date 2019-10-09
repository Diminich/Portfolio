import React from 'react';
import styles from './DistantProjects.module.css';

function DistantProjects  ()  {
  return (
    <div className={styles.distantProjects}>
      <div className={styles.container}>
        <div className={styles.workOptions}>
          Рассматриваю варианты удаленной работы 
        </div>
        <button className={styles.buttons}>
          Смотреть
        </button>
      </div>
      
    </div>
  );
}

export default DistantProjects;
