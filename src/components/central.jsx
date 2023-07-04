import React from "react";
import { useState, useEffect } from "react";
import styles from "./central.module.css";
import personImage from "../media/logo192.png";
import gmail from "../media/gmail.png";
import linkedin from "../media/Linkedin.png";
import github from "../media/gitblack.jpg";
import Navbar from "./navbar";
import CV from "./cv";
import Portfolio from "./portfolio";

const Central = () => {
  const [selectedTab, setSelectedTab] = useState("Resume/CV"); // Default selected tab is "Portfolio"

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.centralContainer}>
      <div className={styles.left}>
        <h1>About me</h1>
        <img src={personImage} alt="Person" />
        <div className={styles.leftText}>
          <ul>
            <h3>Tomás Di Risio</h3> <br />
            <li>Date of birth: 20/12/1996</li>
            <li>Nationality: Argentine/Italian</li>
            <li>E-Mail: tomidirisio@gmail.com</li>
          </ul>
          As a junior developer, I'm eager to enter the professional realm.
          Currently, I'm working on small practice projects to sharpen my
          skills. With a deep passion for coding and a strong desire to learn
          from seasoned professionals, I'm actively seeking my first job in the
          IT industry.
        </div>
        <h2>Contact</h2>
        <div className={styles.techs}>
          <img src={github} alt="github" className={styles.git} />

          <img src={linkedin} alt="linkedin" className={styles.link} />
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className={styles.right}>
        <Navbar
          handleTabClick={handleTabClick}
          selectedTab={selectedTab}
        ></Navbar>

        {selectedTab === "Portfolio" && <Portfolio />}

        {selectedTab === "Resume/CV" && (
          <div className={styles.cv}>
            <CV></CV>
          </div>
        )}
      </div>
    </div>
  );
};

export default Central;
