import useAppData from "../hooks/useAppData";
import { QuestionContent } from "./QuestionContent";
import { WelcomeContent } from "./WelcomeContent";

export const QuizContent = () => {
  const { quizStarted, currentQuestionIndex, totalQuestions, currentQuestion } =
    useAppData();
  return (
    <>
      {quizStarted ? (
        <QuestionContent
          question={currentQuestion}
          questionNumber={
            currentQuestionIndex !== null ? currentQuestionIndex + 1 : null
          }
          totalQuestions={totalQuestions}
        />
      ) : (
        <WelcomeContent />
      )}
    </>
  );
};
