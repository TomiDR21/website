import React, { Component, useState, useEffect } from "react";
import styles from "./central.module.css";

const Navbar = ({ handleTabClick, selectedTab }) => {
  return (
    <>
      <div className={styles.navContainer}>
        <div onClick={() => handleTabClick("Resume/CV")}>Resume/CV</div>
        <div onClick={() => handleTabClick("Portfolio")}>Portfolio</div>
      </div>
    </>
  );
};
export default Navbar;
