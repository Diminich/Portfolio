import React from 'react';
import styles from './Projects.module.css';
import Project from './Project/Project'

function Projects() {
  return (
    <div className={styles.projectsWrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>Мои работы</span>
        </div>
        <Project />
      </div>
    </div>
  );
}

export default Projects;
