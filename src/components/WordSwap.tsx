"use client";

import React from "react";
import getWordsForLanguage from "@/utils/getWordsForSwapEffect";

export default function WordSwap() {
  const currentWords = getWordsForLanguage();
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
  }, [currentWords]);

  return <p className="long-cang-regular Coffwhite">{word}</p>;
}
