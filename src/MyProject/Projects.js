import React from 'react';
import styles from './Projects.module.css';
import Project from './Project/Project'
import { FormattedHTMLMessage } from "react-intl";

function Projects() {

  return (
    <div id='project' className={styles.projectsWrapper}>
      <div className={styles.projectsContainer}>
        <h3 className={styles.title}><FormattedHTMLMessage id="myProject.title" defaultMessage='Мои работы' /></h3>
        <Project />
      </div>
    </div>
  );
}

export default Projects;
