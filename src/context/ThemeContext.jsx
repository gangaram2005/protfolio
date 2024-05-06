import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

// provider create garne taki yo context lai use garna pau

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook jastai export garne

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
