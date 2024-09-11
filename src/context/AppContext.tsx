import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type AppContextType = {
  language: string;
  setLanguage: (newLanguage: string) => void;
  scrollPercentage: number;
  setScrollPercentage: (percentage: number) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setStateLanguage] = useState("EN");
  const [scrollPercentage, setScrollPercentage] = useState(20);
  const [activeSection, setActiveSection] = useState("home");

  function setLanguage(newLanguage: string) {
    setStateLanguage(newLanguage);
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const newScrollPercentage = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      );
      setScrollPercentage(Math.min(newScrollPercentage, 100));

      
      let currentSection = "home";
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          if (
            scrollTop >= sectionTop - windowHeight / 2 &&
            scrollTop < sectionTop + sectionHeight
          ) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        scrollPercentage,
        setScrollPercentage,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe ser usado dentro de AppProvider");
  }
  return context;
};
