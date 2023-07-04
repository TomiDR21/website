import React from "react";
import styles from "./cv.module.css";

export const CV = () => {
  return (
    <div className={styles.cvContainer}>
      <h3>Technical knowledge</h3>
      <h4>Self-taught on following technologies</h4>
      <div className={styles.technologies}>
        • HTML <br />
        • CSS <br />
        • JavaScript <br />
        • ReactJS <br />
        • NodeJS (Express) <br />
        • SQL <br />• GIT
      </div>

      <div className={styles.skills}>
        <h3>Skills</h3>
        <h4>Languages</h4>
        <div>
          Spanish: Native <br />
          English: Fluent <br />
          Italian: Fluent <br />
          German: Intermediate <br />
        </div>
      </div>

      <div className={styles.summary}>
        <h3>Summary</h3>
        As a junior developer, I'm eager to enter the professional realm. <br />
        Currently, I'm working on small practice projects to sharpen my skills.{" "}
        <br />
        With a deep passion for coding and a strong desire to learn from
        seasoned professionals, <br />
        I'm actively seeking my first job in the IT industry.
      </div>
    </div>
  );
};

export default CV;
