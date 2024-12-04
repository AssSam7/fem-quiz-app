import { useEffect, useState } from "react";
import data from "../context/data.json";

const useAppData = () => {
  const [themeMode, setThemeMode] = useState("light");
  const [quiz, setQuiz] = useState(data.quizzes);

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

  useEffect(() => {
    const transformedSubjects = quiz.map((sub) => {
      if (sub.title === "HTML") {
        return { ...sub, iconFillColor: "#FFF1E9" };
      } else if (sub.title === "CSS") {
        return { ...sub, iconFillColor: "#E0FDEF" };
      } else if (sub.title === "Javascript") {
        return { ...sub, iconFillColor: "#EBF0FF" };
      }
      return { ...sub, iconFillColor: "#F6E7FF" };
    });
    setQuiz(transformedSubjects);
  }, []);

  return {
    themeMode,
    themeModeClass,
    setDarkMode,
    setLightMode,
    quiz,
    setQuiz,
  };
};

export default useAppData;
