"use client";

import styles from "../styles/AboutMe.module.css";
import { useAppContext } from "@/context/AppContext";
import Skills from "./Skills";
import RenderTextByToLanguage, {
  RenderTextByLanguageHTML,
} from "@/utils/textRenderByLanguage";

export default function AboutMe() {
  const { language } = useAppContext();

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {
          <h2 className="lexend-zetta Ctext">
            {RenderTextByToLanguage("ABOUT", "SOBRE")}{" "}
            <p className={styles.titleSpacing}>-</p>{" "}
            {RenderTextByToLanguage("ME", "MI")}:
          </h2>
        }
      </div>
      <div className={styles.textContainer}>
        <p className={`${styles.text} roboto-light`}>
          {RenderTextByLanguageHTML(
            <>
              Enthusiastic about computers from a young age, I began my career
              as a programmer during the pandemic, seeking to take my
              understanding of what they really do to the next level. I started
              primarily with web development, where I learned the fundamentals
              of programming with JavaScript as my faithful companion.
              <br />
              I studied at CoderHouse, learning the fundamentals of web
              development, how to deploy an application, and creating APIs using
              React and Node.js as my main tools.
              <br />
              Later, when I entered my first real work experience, I learned
              Python and its applications in the world of databases. I learned
              how to render complex graphics with Looker Studio, build APIs that
              send data to the graphics in a stable and efficient manner, all of
              which required extensive research to develop.
            </>,
            <>
              Entusiasta de las computadoras desde muy chico, comence mi carrera
              como programador en plena pandemia buscando ir al siguiente nivel
              en mi entendimiento de lo que realmente hacen. Empece
              principalmente con el desarollo web, donde aprendi los fundamentos
              de la programacion con JavaScript como fiel compañero.
              <br />
              Estudie en CoderHouse los fundamentos del desarollo web, la forma
              de deployar una aplicacion, la creacion de APIs; utilizando React
              y Node.js como herramientas principales.
              <br />
              Luego al entrar en mi primera experiencia laboral real, aprendi
              Python y sus aplicaciones en el mundo de las bases de datos.
              Aprendi a renderizar graficos complejos con Loocker Studio, a
              realizar API que envien datos a los graficos de forma estable y
              agil, todo esto necesito mucha investigacion para poder
              construirse.
            </>
          )}
        </p>
      </div>
      <div className={styles.titleContainer}>
        <h2 className="lexend-zetta Ctext">
          {RenderTextByToLanguage("SKILLS", "HABILIDADES")}
          {":"}
        </h2>
      </div>
      <div className={styles.textContainer}>
        <p className={`${styles.text} roboto-light`}>
          {RenderTextByToLanguage(
            `Technology has rapidly transformed the way we live, work, and
            connect with one another. From smartphones to artificial
            intelligence, innovation is at the core of our daily routines. Many
            people rely on digital tools for communication, learning, and
            entertainment. The internet, in particular, has created a global
            community where information is readily available.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dapibus ante sed tincidunt gravida. Maecenas ac enim eget ipsum
            tristique maximus sed a ligula. Nam volutpat nulla ac ante
            vulputate, ut facilisis augue condimentum. Pellentesque dui turpis,
            faucibus nec aliquam varius, sodales ut mauris. Ut semper purus in
            rhoncus suscipit. Donec elementum quis tellus vel mattis.`
          )}
        </p>
      </div>
      <div className={styles.SkillsContainer}>
        <Skills />
      </div>
    </div>
  );
}
