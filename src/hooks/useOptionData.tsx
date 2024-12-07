/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import useSelectData from "./useSelectData";
import { selectAnswer, startQuiz } from "../features/quiz/quizSlice";
import { Logo } from "../components/Logo";

type Props = (any | string[]) & {
  handleOptionClick: (subjectId: string) => void;
};

export const useOptionData = (props: Props) => {
  /* RTK Selectors */
  const {
    quizStarted,
    selectedAnswer,
    isAnswerSubmitted,
    isCorrectAnswerSelected,
    correctAnswer,
  } = useSelectData();

  /* States & Consts */
  const [hover, setHover] = useState(false);
  const dispatch = useAppDispatch();

  /* Handler Functions */
  const handleClick = () => {
    props.handleOptionClick(props.id);
    if (!quizStarted) {
      dispatch(startQuiz());
    } else if (!isAnswerSubmitted) {
      dispatch(selectAnswer(props?.title));
    }
  };

  /* Functional Logic */
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
  const getOptionSelectedStyles = () => {
    if (selectedAnswer === props.title) {
      return "border-purple border-4 option-active";
    }
    return "";
  };

  /* Render Functions */
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
  const renderResultLogo = () => {
    if (
      isAnswerSubmitted &&
      isCorrectAnswerSelected &&
      props.title === selectedAnswer
    ) {
      return (
        <Logo icon="../assets/images/icon-correct.svg" className="ml-auto" />
      );
    }
    if (
      isAnswerSubmitted &&
      !isCorrectAnswerSelected &&
      props.title === selectedAnswer
    ) {
      return (
        <Logo icon="../assets/images/icon-incorrect.svg" className="ml-auto" />
      );
    }
    if (
      isAnswerSubmitted &&
      !isCorrectAnswerSelected &&
      props.title === correctAnswer
    ) {
      return (
        <Logo icon="../assets/images/icon-correct.svg" className="ml-auto" />
      );
    }
  };

  /* Return Data */
  return {
    setHover,
    handleClick,
    renderLogo,
    getOptionSelectedStyles,
    renderResultLogo,
  };
};
