"use client";

import Image from "next/image";
import style from "../styles/Home.module.css";
import milaImg from "../public/mila.jpg";
import React from "react";

type Language = 'EN' | 'ES';

function getWordsForLanguage(lang: Language) {
  const wordsEn = [
    "PROGRAMMER",
    "DEVELOPER",
    "SOFTWARE DEVELOPER",
    "ENTHUSIASTIC",
  ];
  const wordsEs = [
    "PROGRAMADOR",
    "DESARROLLADOR DE SOFTWARE",
    "ENTUSIASTA",
    "DESARROLLADOR",
  ];
  switch (lang) {
    case 'EN':
      return wordsEn;
    case 'ES':
      return wordsEs;
    default:
      return wordsEn;
  }
}

export default function Home() {
  const language: Language = 'EN';
  const currentWords = getWordsForLanguage(language);
  const [word, setWord] = React.useState("");

  React.useEffect(() => {
    let currentIndex = 0;
    const totalWords = currentWords.length;

    const interval = setInterval(() => {
      setWord(currentWords[currentIndex]);
      currentIndex = (currentIndex + 1) % totalWords;
    }, 2000); // Cambia el intervalo a 2000ms

    return () => {
      clearInterval(interval);
    };
  }, []); // Agrega `currentWords` como dependencia

  return (
    <div>
      <div className={style.homeElements}>
        <h1 className="lexend-zetta Ctext">FEDE WOODWARD</h1>
        <div className={style.section}>
          <div className={style.wordSwap}>
            <p className="long-cang-regular Coffwhite">{word}</p>
          </div>
          <div className={style.homeImg}>
            <Image src={milaImg} alt="Mila" priority />
          </div>
        </div>
        <div className={style.skillSwap}>
          <div className={style.programmingLanguage}></div>
        </div>
      </div>
    </div>
  );
}
