"use client";

import styles from "../styles/Projects.module.css";
import { useAppContext } from "@/context/AppContext";
import * as React from "react";
import ProjectsContainer from "./ProjectsContainer";

export default function Projects() {
  const { language } = useAppContext();

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {language === "EN" ? (
          <h2 className="lexend-zetta Ctext">PROJECTS</h2>
        ) : (
          <h2 className="lexend-zetta Ctext">PROYECTOS</h2>
        )}
      </div>
      <div className={styles.textContainer}>
        {language === "EN" ? (
          <p className={`${styles.text} roboto-thin`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dapibus ante sed tincidunt gravida. Maecenas ac enim eget ipsum
            tristique maximus sed a ligula. Nam volutpat nulla ac ante
            vulputate, ut facilisis augue condimentum. Pellentesque dui turpis,
            faucibus nec aliquam varius, sodales ut mauris. Ut semper purus in
            rhoncus suscipit. Donec elementum quis tellus vel mattis. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus
            ante sed tincidunt gravida. Maecenas ac enim eget ipsum tristique
            maximus sed a ligula. Nam volutpat nulla ac ante vulputate, ut
            facilisis augue condimentum. Pellentesque dui turpis, faucibus nec
            aliquam varius, sodales ut mauris. Ut semper purus in rhoncus
            suscipit. Donec elementum quis tellus vel mattis.
          </p>
        ) : (
          <p className={`${styles.text} roboto-thin`}>
            Technology has rapidly transformed the way we live, work, and
            connect with one another. From smartphones to artificial
            intelligence, innovation is at the core of our daily routines. Many
            people rely on digital tools for communication, learning, and
            entertainment. The internet, in particular, has created a global
            community where information is readily available. In this
            ever-changing world, adaptability is key. Those who embrace new
            technologies are better equipped to thrive. Education and continuous
            learning are more important than ever. As new challenges arise, they
            also bring opportunities for growth and discovery. With curiosity
            and creativity, we can shape the future in exciting and meaningful
            ways.
          </p>
        )}
      </div>
      <ProjectsContainer />
    </div>
  );
}
