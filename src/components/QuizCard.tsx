import useQuizCardData from "../hooks/useQuizCardData";
import { OptionList } from "./OptionList";

type Props = {
  children?: React.ReactNode;
};
export const QuizCard = ({ children }: Props) => {
  const { getQuizCardClasses } = useQuizCardData();

  return (
    <div className={getQuizCardClasses()}>
      {children}

      <OptionList className="option-list" />
    </div>
  );
};
