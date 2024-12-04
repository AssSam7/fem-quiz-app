import { createContext, useContext } from "react";
import data from "./data.json";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type Quiz = {
  id: number;
  title: string;
  icon: string;
  questions: Question[];
};

export const QuizSubjectsContext = createContext({
  quiz: data.quizzes,
  setQuiz: (data: Quiz[]) => {
    console.log(data);
  },
});

export const QuizSubjectProvider = QuizSubjectsContext.Provider;

export default function useQuizSubjects() {
  return useContext(QuizSubjectsContext);
}
