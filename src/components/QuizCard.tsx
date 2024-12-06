import { useAppSelector } from "../app/hooks";
import { OptionList } from "./OptionList";

type Props = {
  children?: React.ReactNode;
};
export const QuizCard = ({ children }: Props) => {
  const quizStarted = useAppSelector((state) => state.quizStarted);

  return (
    <div
      className={`quiz-card ${
        quizStarted ? "grid-rows-[1fr_auto] gap-10" : ""
      }`}
    >
      {children}

      <OptionList className="option-list" />
    </div>
  );
};
