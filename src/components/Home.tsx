"use client";

import React from "react";
import Image from "next/image";
import style from "../styles/Home.module.css";
import milaImg from "../public/mila.jpg";
import WordSwap from "./WordSwap";
import Button from "./ButtonKnowMe";

interface HomeProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Home({ scrollToSection }: HomeProps) {
  return (
    <div id="home" className={style.homeElements}>
      <h1 className="lexend-zetta Ctext">FEDE WOODWARD</h1>
      <div className={style.section}>
        <div className={style.wordSwap}>
          <WordSwap />
        </div>
        <div className={style.homeImg}>
          <Image src={milaImg} alt="Mila" priority />
        </div>
      </div>
      <div className={style.knowMeButtonContainer}>
        <Button onClick={() => scrollToSection("about")} />
      </div>
    </div>
  );
}
