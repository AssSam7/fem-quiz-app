import { createContext, useContext } from "react";
import data from "./data.json";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type Quiz = {
  id: number;
  title: string;
  icon: string;
  questions: Question[];
};

export const QuizContext = createContext({
  quiz: data.quizzes,
  setQuiz: (data: Quiz[]) => {
    console.log(data);
  },
  // questionNumber: 1,
  // totalQuestions: null,
  // nextQues: () => {},
  themeMode: "light",
  setDarkMode: () => {},
  setLightMode: () => {},
});

export const QuizProvider = QuizContext.Provider;

export default function useQuiz() {
  return useContext(QuizContext);
}
