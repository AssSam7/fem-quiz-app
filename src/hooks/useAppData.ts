import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";

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

  /* Quiz Slice */
  const quizSubjects = useAppSelector((state) => state.quizSubjects);
  const quizStarted = useAppSelector((state) => state.quizStarted);
  const quizQuestions = useAppSelector((state) => state.quizQuestions);
  const currentQuestionIndex = useAppSelector(
    (state) => state.currentQuestionIndex
  );
  const totalQuestions = useAppSelector((state) => state.totalQuestions);
  const currentQuestion = useAppSelector((state) => state.currentQuestion);

  return {
    themeMode,
    themeModeClass,
    setDarkMode,
    setLightMode,
    quizSubjects,
    quizStarted,
    quizQuestions,
    currentQuestionIndex,
    totalQuestions,
    currentQuestion,
  };
};

export default useAppData;
