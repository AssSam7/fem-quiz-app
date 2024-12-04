import { useEffect, useState } from "react";

const useAppData = () => {
  const [themeMode, setThemeMode] = useState("light");

  const setDarkMode = () => {
    setThemeMode("dark");
  };

  const setLightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return {
    themeMode,
    setDarkMode,
    setLightMode,
  };
};

export default useAppData;
