/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import useSelectData from "./useSelectData";
import { startQuiz } from "../features/quiz/quizSlice";
import { Logo } from "../components/Logo";

type Props = (any | string[]) & {
  handleOptionClick: (subjectId: string) => void;
};

export const useOptionData = (props: Props) => {
  const [hover, setHover] = useState(false);
  const dispatch = useAppDispatch();

  const { quizStarted } = useSelectData();

  const handleClick = () => {
    props.handleOptionClick(props.id);
    if (!quizStarted) {
      dispatch(startQuiz());
    }
  };

  const getOptionName = () => {
    if (props.id === 1) {
      return "A";
    } else if (props?.id === 2) {
      return "B";
    } else if (props?.id === 3) {
      return "C";
    }
    return "D";
  };

  const renderLogo = () => {
    return props?.icon ? (
      <Logo key={props?.id} bgColor={props?.iconFillColor} icon={props?.icon} />
    ) : (
      <Logo
        key={props?.id}
        bgColor="#F4F6FA"
        text={getOptionName()}
        className={hover ? "bg-logo-hover" : ""}
      />
    );
  };

  return {
    setHover,
    handleClick,
    renderLogo,
  };
};
