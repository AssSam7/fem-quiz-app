import useSelectData from "../hooks/useSelectData";
import { QuestionContent } from "./QuestionContent";
import { WelcomeContent } from "./WelcomeContent";

export const QuizContent = () => {
  const { quizStarted, currentQuestionIndex, totalQuestions, currentQuestion } =
    useSelectData();

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
