import useQuiz from "../context/Theme";

type Props = {
  question: string;
  questionNumber: number;
  totalQuestions: number;
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
      <h4 className="font-rubik-italic font-light text-grey-navy dark:text-light-bluish text-[20px]">
        Question {questionNumber} of {totalQuestions}
      </h4>
      <h3 className="text-dark-navy dark:text-pure-white font-extralight">
        {question}
      </h3>
    </div>
  );
};
