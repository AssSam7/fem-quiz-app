import { useEffect, useState } from "react";

const useAppData = () => {
  /* Theme Switcher Code */
  const [themeMode, setThemeMode] = useState("light");

  const setDarkMode = () => {
    setThemeMode("dark");
  };

  const setLightMode = () => {
    setThemeMode("light");
  };

  const themeModeClass = themeMode === "dark" ? "bg-dark-img" : "";

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return {
    themeMode,
    themeModeClass,
    setDarkMode,
    setLightMode,
  };
};

export default useAppData;
