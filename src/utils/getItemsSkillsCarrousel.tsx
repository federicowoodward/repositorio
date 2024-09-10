import SkillsPngs from "@/public/skills/AskillsImports";
import { StaticImageData } from "next/image";

interface PageItem {
  page: number;
  items: { png: StaticImageData; text: string }[]; 
}

const items: PageItem[] = [
  { page: 1, items: [
    { png: SkillsPngs.HTML5, text: "HTML5" },
    { png: SkillsPngs.JavaScript, text: "JavaScript" },
    { png: SkillsPngs.MicrosoftWindows, text: "Windows" },
    { png: SkillsPngs.Gitlab, text: "GitLab" }
  ] },
  { page: 2, items: [
    { png: SkillsPngs.MySQL, text: "MySQL" },
    { png: SkillsPngs.Nodejs, text: "Node.js" },
    { png: SkillsPngs.Figma, text: "Figma" },
    { png: SkillsPngs.Npm, text: "NPM" }
  ] },
  { page: 3, items: [
    { png: SkillsPngs.PostgreSQL, text: "PostgreSQL" },
    { png: SkillsPngs.Prettier, text: "Prettier" },
    { png: SkillsPngs.Python, text: "Python" },
    { png: SkillsPngs.ReactLogo, text: "React" }
  ] },
  { page: 4, items: [
    { png: SkillsPngs.TypeScript, text: "TypeScript" },
    { png: SkillsPngs.Vercel, text: "Vercel" },
    { png: SkillsPngs.VisualStudioCode, text: "Visual Studio Code" },
    { png: SkillsPngs.VisualStudio, text: "Visual Studio" }
  ] },
  { page: 5, items: [
    { png: SkillsPngs.Vue, text: "Vue" },
    { png: SkillsPngs.Yarn, text: "Yarn" },
    { png: SkillsPngs.Firebase, text: "Firebase" },
    { png: SkillsPngs.AWS, text: "AWS" }
  ] },
  { page: 6, items: [
    { png: SkillsPngs.Axios, text: "Axios" },
    { png: SkillsPngs.Bootstrap, text: "Bootstrap" },
    { png: SkillsPngs.CSharp, text: "C#" },
    { png: SkillsPngs.CSS3, text: "CSS3" }
  ] },
  { page: 7, items: [
    { png: SkillsPngs.Docker, text: "Docker" },
  ] },
];

export function getItems(page: number) {
  const pageItems = items.find((p) => p.page === page);
  return pageItems ? pageItems.items : [];
}
export function itemsLength() {
  return items.length;
}