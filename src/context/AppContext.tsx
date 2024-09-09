import React, { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  language: string;
  setLanguage: (newLanguage: string) => void;
  scrollPercentage: number;
  setScrollPercentage: (percentage: number) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setStateLanguage] = useState("EN");
  const [scrollPercentage, setScrollPercentage] = useState(20);

  function setLanguage(newLanguage: string) {
    setStateLanguage(newLanguage); 
  }

  return (
    <AppContext.Provider value={{ language, setLanguage, scrollPercentage, setScrollPercentage }}>
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
