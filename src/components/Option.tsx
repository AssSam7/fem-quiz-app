// @flow
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { startQuiz } from "../features/quiz/quizSlice";
import { Logo } from "./Logo";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = (any | string[]) & {
  handleOptionClick: (subjectId: string) => void;
};

export const Option = (props: Props) => {
  const { handleOptionClick } = props;
  const [hover, setHover] = useState(false);
  const dispatch = useAppDispatch();

  const quizStarted = useAppSelector((state) => state.quizStarted);

  const handleClick = () => {
    handleOptionClick(props?.id);
    if (!quizStarted) {
      dispatch(startQuiz());
    }
  };

  const getOptionName = () => {
    if (props?.id === 1) {
      return "A";
    } else if (props?.id === 2) {
      return "B";
    } else if (props?.id === 3) {
      return "C";
    }
    return "D";
  };

  return (
    <li
      className="option"
      role="button"
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props?.icon ? (
        <Logo
          key={props?.id}
          bgColor={props?.iconFillColor}
          icon={props?.icon}
        />
      ) : (
        <Logo
          key={props?.id}
          bgColor="#F4F6FA"
          text={getOptionName()}
          className={hover ? "bg-logo-hover" : ""}
        />
      )}
      <p className="text-dark-navy font-medium text-base dark:text-pure-white">
        {props?.title}
      </p>
    </li>
  );
};
