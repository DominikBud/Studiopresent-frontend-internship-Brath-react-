import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function changeTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ changeTheme, darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");

  return context;
}

export { DarkModeProvider, useDarkMode };
