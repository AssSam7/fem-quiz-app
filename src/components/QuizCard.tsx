import { QuizSubject } from "../types";
import { OptionList } from "./OptionList";

type Props = {
  list: QuizSubject[];
  children?: React.ReactNode;
};
export const QuizCard = ({ list: quiz, children }: Props) => {
  return (
    <div className="quiz-card">
      {children}

      <OptionList className="option-list" list={quiz} />
    </div>
  );
};
