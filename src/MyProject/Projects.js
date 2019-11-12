import React from 'react';
import styles from './Projects.module.css';
import Project from './Project/Project'
import {FormattedHTMLMessage} from "react-intl";

function Projects() {

  return (
    <div  id='project' className={styles.projectsWrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
           <span><h3><FormattedHTMLMessage  id="myProject.title" defaultMessage='Мои работы'/></h3></span>
        </div>
        <Project />
      </div>

    </div>
  );
}

export default Projects;
