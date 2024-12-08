import { useEffect, useState } from "react";
import useSelectData from "./useSelectData";
import { QuizCard } from "../components/QuizCard";
import { QuizContent } from "../components/QuizContent";
import { QuizResultCard } from "../components/QuizResultCard";

const useAppData = () => {
  const { quizEnded } = useSelectData();
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

  const renderAppContent = () => {
    return quizEnded ? (
      <QuizResultCard />
    ) : (
      <QuizCard>
        <QuizContent />
      </QuizCard>
    );
  };

  return {
    themeMode,
    themeModeClass,
    setDarkMode,
    setLightMode,
    renderAppContent,
  };
};

export default useAppData;
