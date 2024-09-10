import { useAppContext } from "@/context/AppContext";

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

export default function getWordsForLanguage() {
  const { language } = useAppContext();

  if (language === "EN") {
    return wordsEn;
  } else if (language === "ES") {
    return wordsEs;
  } else {
    return [];
  }
}
