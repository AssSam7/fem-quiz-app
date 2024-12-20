import useQuiz from "../context/Theme";
import { QuestionProgress } from "./QuestionProgress";

type Props = {
  question: string | null;
  questionNumber: number | null;
  totalQuestions: number | null;
};

export const QuestionContent = ({
  question,
  questionNumber,
  totalQuestions,
}: Props) => {
  const { themeMode } = useQuiz();

  return (
    <div
      className="question-content"
      style={themeMode === "dark" ? { color: "inherit" } : {}}
    >
      <div className="flex flex-col gap-7 md:gap-5">
        <h4 className="font-rubik-italic font-light text-grey-navy dark:text-light-bluish text-[20px] sm:text-[14px]">
          Question {questionNumber} of {totalQuestions}
        </h4>
        <h3 className="text-dark-navy dark:text-pure-white font-normal sm:text-[20px]">
          {question}
        </h3>
      </div>
      <QuestionProgress />
    </div>
  );
};
