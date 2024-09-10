"use client";

import styles from "../styles/Header.module.css";
import SwitchLanguage from "./SwitchLanguage";
import { useAppContext } from "@/context/AppContext";
import React from "react";

interface HeaderProps {
  position: string;
}

export default function Header({ position }: HeaderProps) {
  const { language, scrollPercentage } = useAppContext();

  const getProgressPercentage = (position: string) => {
    switch (position) {
      case "home":
        return 22;
      case "about":
        return 44;
      case "projects":
        return 67;
      case "contact":
        return 92;
      case "footer":
        return 100;
      default:
        return 0;
    }
  };

  const progressPercentage = getProgressPercentage(position);

  React.useEffect(() => {}, [scrollPercentage]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className="logo">
          <h1 className={`${styles.logoh1} lily-script-one-regular Cobject`}>
            FW
          </h1>
        </div>
        <div className={styles.navbar}>
          <p
            className={`lexend-zetta ${
              position !== "home" ? "Coffwhite" : "Ctext"
            }`}
          >
            {language === "EN" ? "HOME" : "INICIO"}
          </p>
          <p
            className={`lexend-zetta ${
              position !== "about" ? "Coffwhite" : "Ctext"
            }`}
          >
            {language === "EN" ? "ABOUT ME" : "SOBRE MI"}
          </p>
          <p
            className={`lexend-zetta ${
              position !== "projects" ? "Coffwhite" : "Ctext"
            }`}
          >
            {language === "EN" ? "PROJECTS" : "PROYECTOS"}
          </p>
          <p
            className={`lexend-zetta ${
              position !== "contact" ? "Coffwhite" : "Ctext"
            }`}
          >
            {language === "EN" ? "LET'S TALK!" : "HABLEMOS!"}
          </p>
          <div className={styles.progressLine}>
            <div
              className={styles.progressLineUp}
              style={{ width: `${scrollPercentage}%` }}
            ></div>
            <div className={styles.progressLineDown}></div>
          </div>
        </div>
        <SwitchLanguage />
      </div>
    </div>
  );
}
