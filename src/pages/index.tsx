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
  const { setScrollPercentage } = useAppContext();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100 + 20);
    const scrollPercentageNoMoreThat100 = Math.min(scrollPercentage, 100);
    setScrollPercentage(scrollPercentageNoMoreThat100);
  };

  useEffect(() => { 
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="body">
      <Header position="home" />
      <Home />
      <AboutMe />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
