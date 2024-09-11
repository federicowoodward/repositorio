"use client";

import React from "react";
import styles from "../styles/Header.module.css";
import SwitchLanguage from "./SwitchLanguage";
import { useAppContext } from "@/context/AppContext";
import RenderTextByToLanguage from "@/utils/textRenderByLanguage";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const { scrollPercentage, activeSection } = useAppContext();

  React.useEffect(() => {}, [activeSection]);
  const getProgressPercentage = (section: string) => {
    switch (section) {
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

  const progressPercentage = getProgressPercentage(activeSection);

  return (
    <section>
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
                activeSection !== "home" ? "Coffwhite" : "Ctext"
              }`}
              onClick={() => scrollToSection("home")}
            >
              {RenderTextByToLanguage("HOME", "INICIO")}
            </p>
            <p
              className={`lexend-zetta ${
                activeSection !== "about" ? "Coffwhite" : "Ctext"
              }`}
              onClick={() => scrollToSection("about")}
            >
              {RenderTextByToLanguage("ABOUT ME", "SOBRE MI")}
            </p>
            <p
              className={`lexend-zetta ${
                activeSection !== "projects" ? "Coffwhite" : "Ctext"
              }`}
              onClick={() => scrollToSection("projects")}
            >
              {RenderTextByToLanguage("PROJECTS", "PROYECTOS")}
            </p>
            <p
              className={`lexend-zetta ${
                activeSection !== "contact" ? "Coffwhite" : "Ctext"
              }`}
              onClick={() => scrollToSection("contact")}
            >
              {RenderTextByToLanguage("LET'S TALK!", "HABLEMOS!")}
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
    </section>
  );
}
