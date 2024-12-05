import { OptionList } from "./OptionList";

type Props = {
  children?: React.ReactNode;
};
export const QuizCard = ({ children }: Props) => {
  return (
    <div className="quiz-card">
      {children}

      <OptionList className="option-list" />
    </div>
  );
};
