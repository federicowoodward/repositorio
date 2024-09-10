const projects = [
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

function filterProjects(language: string, categorySelected: string) {
  return projects.filter((project) => {
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
}

export { projects, categoriesEN, categoriesES, filterProjects };
