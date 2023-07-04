import React from "react";
import styles from "./central.module.css";

export const Portfolio = () => {
  return (
    <div className={styles.projectsContainer}>
      {/* Content for Portfolio tab */}

      <a
        href="https://tomidr21.github.io/to-do-list/"
        rel="noopener noreferrer"
        target="_blank"
        className={styles.project1}
      >
        <h3>To-Do List</h3>A simple yet tremendously awesome CRUD application,
        applying basic HTML, CSS, Javascript and ReactJS.
      </a>

      <a
        href="https://tomidr21.github.io/to-do-list/"
        rel="noopener noreferrer"
        target="_blank"
        className={styles.project2}
        style={{ backgroundImage: 'url("path/to/your/image.jpg")' }}
      >
        <h3>To-Do List</h3>A simple yet awesome CRUD application, applying basic
        HTML, CSS, Javascript and ReactJS.
      </a>
      <a
        href="https://tomidr21.github.io/to-do-list/"
        rel="noopener noreferrer"
        target="_blank"
        className={styles.project2}
      >
        <h3>To-Do List</h3>A simple yet awesome CRUD application, applying basic
        HTML, CSS, Javascript and ReactJS.
      </a>
      <a
        href="https://tomidr21.github.io/to-do-list/"
        rel="noopener noreferrer"
        target="_blank"
        className={styles.project2}
      >
        <h3>To-Do List</h3>A simple yet awesome CRUD application, applying basic
        HTML, CSS, Javascript and ReactJS.
      </a>
    </div>
  );
};

export default Portfolio;
