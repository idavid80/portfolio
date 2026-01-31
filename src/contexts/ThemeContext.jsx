import { createContext, useContext } from 'react';

// Solo exportamos constantes y funciones (lógica pura)
export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};