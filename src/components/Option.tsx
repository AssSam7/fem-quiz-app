// @flow
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { startQuiz } from "../features/quiz/quizSlice";
import { Logo } from "./Logo";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = (any | string[]) & {
  handleOptionClick: (subjectId: string) => void;
};

export const Option = (props: Props) => {
  const { handleOptionClick } = props;
  const dispatch = useAppDispatch();

  const quizStarted = useAppSelector((state) => state.quizStarted);

  const handleClick = () => {
    handleOptionClick(props?.id);
    if (!quizStarted) {
      dispatch(startQuiz());
    }
  };

  return (
    <li className="option" role="button" onClick={handleClick}>
      {props?.icon && (
        <Logo
          key={props?.id}
          bgColor={props?.iconFillColor}
          icon={props?.icon}
        />
      )}
      <p className="text-dark-navy font-medium text-base dark:text-pure-white">
        {props?.title}
      </p>
    </li>
  );
};
