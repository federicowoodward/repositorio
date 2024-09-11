"use client";

import React, { useEffect } from "react";
import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Home from "@/components/Home";
import { useAppContext } from "@/context/AppContext";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  const { setScrollPercentage, setActiveSection } = useAppContext();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = Math.round(
      (scrollTop / (documentHeight - windowHeight)) * 100
    );
    setScrollPercentage(scrollPercentage);

    const sections = ["home", "aboutMe", "projects", "contact", "footer"];
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
      }
      return false;
    });
    setActiveSection(currentSection || "home");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="body">
      <section id="header">
        <Header scrollToSection={scrollToSection} />
      </section>
      <section id="home">
        <Home scrollToSection={scrollToSection} />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
