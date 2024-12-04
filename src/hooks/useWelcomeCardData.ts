import { useEffect, useState } from "react";
import data from "../context/data.json";

const useWelcomeCardData = () => {
  const [quiz, setQuiz] = useState(data.quizzes);

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

  return { quiz, setQuiz };
};

export default useWelcomeCardData;
