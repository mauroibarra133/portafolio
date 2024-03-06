/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const initialTheme = "light";

  const [contextTheme, setContextTheme] = useState(localStorage.getItem("selectedTheme") || initialTheme);

  useEffect(() => {
    // Guardar la elección del idioma en el localStorage
    localStorage.setItem("selectedTheme", contextTheme);
  }, [contextTheme]);

  const values = { contextTheme, setContextTheme };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
