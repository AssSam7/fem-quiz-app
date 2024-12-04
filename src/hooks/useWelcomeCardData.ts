import { useEffect, useState } from "react";
import data from "../context/data.json";

const useWelcomeCardData = () => {
  const [subjects, setSubjects] = useState(data.quizzes);

  const setSubjectData = () => {
    const transformedSubjects = subjects.map((sub) => {
      if (sub.title === "HTML") {
        return { ...sub, iconFillColor: "#FFF1E9" };
      } else if (sub.title === "CSS") {
        return { ...sub, iconFillColor: "#E0FDEF" };
      } else if (sub.title === "Javascript") {
        return { ...sub, iconFillColor: "#EBF0FF" };
      }
      return { ...sub, iconFillColor: "#F6E7FF" };
    });
    setSubjects(transformedSubjects);
  };

  useEffect(() => {
    setSubjectData();
  }, []);

  return { subjects, setSubjectData };
};

export default useWelcomeCardData;
