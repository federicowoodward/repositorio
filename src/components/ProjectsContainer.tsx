"use client";

import styles from "../styles/ProjectsContainer.module.css";
import { useAppContext } from "@/context/AppContext";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  categoriesEN,
  categoriesES,
  filterProjects,
} from "@/utils/getProyectsForProjectsContainer";

export default function ProjectsContainer() {
  const { language } = useAppContext();
  const [value, setValue] = React.useState(0);
  const [categorySelected, setCategorySelected] = React.useState(
    language === "EN" ? categoriesEN[0] : categoriesES[0]
  );

  // Actualiza las categorías disponibles y la categoría seleccionada cuando cambia el idioma
  React.useEffect(() => {
    const newCategories = language === "EN" ? categoriesEN : categoriesES;
    setCategorySelected(newCategories[0]);
    setValue(0); // Resetea la pestaña seleccionada
  }, [language]);

  // Filtra proyectos según la categoría seleccionada y el idioma
  const filteredProjects = filterProjects(language, categorySelected);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const newCategory = (language === "EN" ? categoriesEN : categoriesES)[newValue];
    setCategorySelected(newCategory);
  };

  return (
    <div className={styles.container}>
      <Box
        sx={{ width: "100%", bgcolor: "var(--fondo2)" }}
        className={styles.box}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            style: {
              backgroundColor: "var(--shadow)",
            },
          }}
        >
          {(language === "EN" ? categoriesEN : categoriesES).map((category, index) => (
            <Tab
              label={category}
              key={index}
              sx={{
                color: "var(--offwhite)", // Color de texto por defecto
                "&:hover": {
                  backgroundColor: "var(--fondo1op)",
                  color: "var(--shadow)",
                },
                "&:active": {
                  color: "var(--shadow)",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
      <div className={styles.projectBoxContainer}>
        {filteredProjects.map((project, index) => (
          <div className={styles.projectBox} key={index}>
            <div className={styles.onHover}>
              <h3>{project.title}</h3>
              <p className="roboto-thin">{project.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
