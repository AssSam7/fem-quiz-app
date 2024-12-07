import useSelectData from "./useSelectData";

const useQuizCardData = () => {
  const { quizStarted } = useSelectData();

  const getQuizCardClasses = () => {
    return `quiz-card ${quizStarted ? "grid-rows-[1fr_auto] gap-10" : ""}`;
  };

  return {
    getQuizCardClasses,
  };
};

export default useQuizCardData;
