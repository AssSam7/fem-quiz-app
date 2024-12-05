import { useAppSelector } from "../app/hooks";

const useHeaderData = () => {
  /* Quiz Selectors */
  const quizQuestions = useAppSelector((state) => state.quizQuestions);

  return {
    quizQuestions,
  };
};

export default useHeaderData;
