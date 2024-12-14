import { useAppDispatch } from "../app/hooks";
import { restartQuiz } from "../features/quiz/quizSlice";
import useSelectData from "./useSelectData";

const useQuizResultCardData = () => {
  const { quizQuestions, quizScore, totalQuestions } = useSelectData();
  const dispatch = useAppDispatch();

  const handlePlayAgain = () => {
    dispatch(restartQuiz());
  };

  return { quizQuestions, quizScore, totalQuestions, handlePlayAgain };
};

export default useQuizResultCardData;
