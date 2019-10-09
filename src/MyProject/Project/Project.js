import React from 'react';
import styles from './Project.module.css';


function Project() {
  return (
    <div className={styles.progects}>
      <div className={styles.progect}>
        <div className={styles.cell1}>
          <div className={styles.img}>
            Картинка
            </div>
          <button className={styles.button}>
            Смотреть
            </button>
        </div>
        <div className={styles.cell2}>
          <div className={styles.nameProject}>
            Название проекта
            </div>
          <div className={styles.descriptionProject}>
            Описание проекта
            </div>
        </div>
      </div>
      <div className={styles.progect}>
        <div className={styles.cell1}>
          <div className={styles.img}>
            Картинка
            </div>
          <button className={styles.button}>
            Смотреть
            </button>
        </div>
        <div className={styles.cell2}>
          <div className={styles.nameProject}>
            Название проекта
            </div>
          <div className={styles.descriptionProject}>
            Описание проекта
            </div>
        </div>
      </div>
      <div className={styles.progect}>
        <div className={styles.cell1}>
          <div className={styles.img}>
            Картинка
            </div>
          <button className={styles.button}>
            Смотреть
            </button>
        </div>
        <div className={styles.cell2}>
          <div className={styles.nameProject}>
            Название проекта
            </div>
          <div className={styles.descriptionProject}>
            Описание проекта
            </div>
        </div>
      </div>
      <div className={styles.progect}>
        <div className={styles.cell1}>
          <div className={styles.img}>
            Картинка
            </div>
          <button className={styles.button}>
            Смотреть
            </button>
        </div>
        <div className={styles.cell2}>
          <div className={styles.nameProject}>
            Название проекта
            </div>
          <div className={styles.descriptionProject}>
            Описание проекта
            </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
