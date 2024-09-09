"use client";

import React from "react";
import { useAppContext } from "@/context/AppContext";

function getWordsForLanguage(lang: string) {
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
    case "EN":
      return wordsEn;
    case "ES":
      return wordsEs;
    default:
      console.error("Unknown language");
      return wordsEn;
  }
}

export default function WordSwap() {
  const { language } = useAppContext();
  const currentWords = getWordsForLanguage(language);
  const [word, setWord] = React.useState(currentWords[0]);

  React.useEffect(() => {
    setWord(currentWords[0]);

    let currentIndex = 1;
    const totalWords = currentWords.length;

    const interval = setInterval(() => {
      setWord(currentWords[currentIndex]);
      currentIndex = (currentIndex + 1) % totalWords;
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [language]);

  return <p className="long-cang-regular Coffwhite">{word}</p>;
}
