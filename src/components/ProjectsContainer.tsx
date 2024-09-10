"use client";

import styles from "../styles/ProjectsContainer.module.css";
import { useAppContext } from "@/context/AppContext";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const proyects = [
  {
    img: "nada aca",
    text: "Una aplicación móvil para organizar tareas y recordatorios.",
    title: "Gestor de Tareas",
    categoryEN: "web developer",
    categoryES: "desarrollo web",
  },
  {
    img: "nada aca",
    text: "Plataforma web para encontrar eventos culturales en tu ciudad.",
    title: "Eventos Cerca de Ti",
    categoryEN: "web design",
    categoryES: "diseño web",
  },
  {
    img: "nada aca",
    text: "Un sitio web para aprender a programar con lecciones interactivas.",
    title: "Academia de Programación",
    categoryEN: "certificates",
    categoryES: "certificados",
  },
  {
    img: "nada aca",
    text: "Aplicación para compartir recetas de cocina con amigos y familia.",
    title: "Recetas Compartidas",
    categoryEN: "web design",
    categoryES: "diseño web",
  },
  {
    img: "nada aca",
    text: "Sistema de gestión para pequeñas empresas con inventario y facturación.",
    title: "Gestión Empresarial",
    categoryEN: "api",
    categoryES: "api",
  },
  {
    img: "nada aca",
    text: "Una plataforma de e-commerce para productos artesanales.",
    title: "Tienda de Artesanías",
    categoryEN: "web developer",
    categoryES: "desarrollo web",
  },
  {
    img: "nada aca",
    text: "Red social para entusiastas del cine que permite compartir reseñas.",
    title: "CineManía",
    categoryEN: "web design",
    categoryES: "diseño web",
  },
  {
    img: "nada aca",
    text: "Aplicación para organizar partidas de juegos multijugador en línea.",
    title: "GameMatch",
    categoryEN: "api",
    categoryES: "api",
  },
  {
    img: "nada aca",
    text: "Un servicio para la creación de portfolios profesionales en línea.",
    title: "Creador de Portfolios",
    categoryEN: "certificates",
    categoryES: "certificados",
  },
];

const categoriesEN = [
  "all projects",
  "web design",
  "web developer",
  "api",
  "certificates",
];
const categoriesES = [
  "todos",
  "diseño web",
  "desarrollo web",
  "api",
  "certificados",
];

export default function ProjectsContainer() {
  const { language } = useAppContext();
  const [value, setValue] = React.useState(0);
  const [categorySelected, setCategorySelected] = React.useState(
    language === "EN" ? categoriesEN[0] : categoriesES[0]
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClickOnCategory = (
    event: React.SyntheticEvent,
    category: string
  ) => {
    setCategorySelected(
      language === "EN"
        ? category
        : categoriesES[categoriesEN.indexOf(category)]
    );
  };

  const filteredProjects = proyects.filter((project) => {
    if (language === "EN") {
      return (
        categorySelected === "all projects" ||
        project.categoryEN === categorySelected
      );
    } else {
      return (
        categorySelected === "todos" || project.categoryES === categorySelected
      );
    }
  });

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
              backgroundColor: "var(--shadow)", // Color de la línea indicadora (para active/focus)
            },
          }}
        >
          {categoriesEN.map((category, index) => (
            <Tab
              label={category}
              key={index}
              onClick={(event) => handleClickOnCategory(event, category)}
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
