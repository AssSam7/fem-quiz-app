import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

const useSelectData = () => {
  const quizSubjects = useAppSelector((state: RootState) => state.quizSubjects);
  const quizSubjectId = useAppSelector((state: RootState) => state.subjectId);
  const quizStarted = useAppSelector((state: RootState) => state.quizStarted);
  const quizQuestions = useAppSelector(
    (state: RootState) => state.quizQuestions
  );
  const currentQuestionIndex = useAppSelector(
    (state: RootState) => state.currentQuestionIndex
  );
  const totalQuestions = useAppSelector(
    (state: RootState) => state.totalQuestions
  );
  const currentQuestion = useAppSelector(
    (state: RootState) => state.currentQuestion
  );
  const currentOptions = useAppSelector(
    (state: RootState) => state.currentOptions
  );
  const correctAnswer = useAppSelector(
    (state: RootState) => state.correctAnswer
  );
  const selectedAnswer = useAppSelector(
    (state: RootState) => state.selectedAnswer
  );
  const isCorrectAnswerSelected = useAppSelector(
    (state: RootState) => state.isCorrectAnswerSelected
  );
  const isAnswerSubmitted = useAppSelector(
    (state: RootState) => state.isAnswerSubmitted
  );

  return {
    quizSubjects,
    quizSubjectId,
    quizStarted,
    quizQuestions,
    currentQuestionIndex,
    totalQuestions,
    currentQuestion,
    currentOptions,
    correctAnswer,
    selectedAnswer,
    isCorrectAnswerSelected,
    isAnswerSubmitted,
  };
};

export default useSelectData;
