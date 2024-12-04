import { createContext, useContext } from "react";
import data from "./data.json";

export const QuizSubjectsContext = createContext({
  subjects: data.quizzes,
  setSubjectData: () => {},
});

export const QuizSubjectProvider = QuizSubjectsContext.Provider;

export default function useQuizSubjects() {
  return useContext(QuizSubjectsContext);
}
