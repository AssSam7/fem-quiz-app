import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "dark",
  setDarkMode: () => {},
  setLightMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useQuiz() {
  return useContext(ThemeContext);
}
