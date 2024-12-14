import { useEffect, useState } from "react";
import useSelectData from "./useSelectData";
import { QuizCard } from "../components/QuizCard";
import { QuizContent } from "../components/QuizContent";
import { QuizResultCard } from "../components/QuizResultCard";

const useAppData = () => {
  const { quizEnded } = useSelectData();
  /* Theme Switcher Code */
  const [themeMode, setThemeMode] = useState("dark");

  const setDarkMode = () => {
    setThemeMode("dark");
  };

  const setLightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);

    if (themeMode === "dark") {
      document.body.classList.add("bg-dark-img");
    } else if (themeMode === "light") {
      document.body.classList.remove("bg-dark-img");
    }
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
    setDarkMode,
    setLightMode,
    renderAppContent,
  };
};

export default useAppData;
