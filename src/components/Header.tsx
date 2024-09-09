"use client";

import styles from "../styles/Header.module.css";
import Switch from "./Switch";

interface HeaderProps {
  position: string;
}

export default function Header({ position }: HeaderProps) {
  let progressPercentage: number = 0;

  switch (position) {
    case "home":
      progressPercentage = 22;
      break;
    case "about":
      progressPercentage = 44;
      break;
    case "projects":
      progressPercentage = 67;
      break;
    case "contact":
      progressPercentage = 92;
      break;
    case "footer":
      progressPercentage = 100;
      break;
  }

  return (
    <div className={styles.header}>
      <div className="logo">
        <h1 className={`${styles.logoh1} lily-script-one-regular Cobject`}>
          {" "}
          FW
        </h1>
      </div>
      <div className={styles.navbar}>
        <p
          className={`lexend-zetta ${
            position !== "home" ? "Coffwhite" : "Ctext"
          }`}
        >
          HOME
        </p>
        <p
          className={`lexend-zetta ${
            position !== "about" ? "Coffwhite" : "Ctext"
          }`}
        >
          ABOUT ME
        </p>
        <p
          className={`lexend-zetta ${
            position !== "projects" ? "Coffwhite" : "Ctext"
          }`}
        >
          PROJECTS
        </p>
        <p
          className={`lexend-zetta ${
            position !== "contact" ? "Coffwhite" : "Ctext"
          }`}
        >
          LET'S TALK!
        </p>
        <div className={styles.progressLine}>
          <div
            className={styles.progressLineUp}
            style={{ width: `${progressPercentage}%` }}
          ></div>
          <div className={styles.progressLineDown}></div>
        </div>
      </div>
      <Switch />
    </div>
  );
}
