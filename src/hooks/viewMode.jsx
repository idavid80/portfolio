import { useState, useEffect } from "react";

export const viewMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Cambia el theme según el estado darkMode
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
