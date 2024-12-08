/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import useSelectData from "./useSelectData";
import { selectAnswer, startQuiz } from "../features/quiz/quizSlice";
import { Logo } from "../components/common/Logo";
import { Icon } from "../components/common/Icon";

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [iconDimesions, setIconDimension] = useState(
    windowWidth < 480
      ? {
          width: "28.5",
          height: "28.5",
        }
      : {
          width: "40",
          height: "40",
        }
  );
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
    if (selectedAnswer === props.title && !isAnswerSubmitted) {
      return "border-purple border-4 option-active";
    }
    return "";
  };

  /* Render Functions */
  const renderLogo = () => {
    return props?.icon ? (
      <Logo
        key={props?.id}
        bgColor={props?.iconFillColor}
        icon={props?.icon}
        iconWidth={iconDimesions.width}
        iconHeight={iconDimesions.height}
      />
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
        <Icon url="../assets/images/icon-correct.svg" className="ml-auto" />
      );
    }
    if (
      isAnswerSubmitted &&
      !isCorrectAnswerSelected &&
      props.title === selectedAnswer
    ) {
      return (
        <Icon url="../assets/images/icon-incorrect.svg" className="ml-auto" />
      );
    }
    if (
      isAnswerSubmitted &&
      !isCorrectAnswerSelected &&
      props.title === correctAnswer &&
      selectedAnswer !== null
    ) {
      return (
        <Icon url="../assets/images/icon-correct.svg" className="ml-auto" />
      );
    }
  };

  /* Side Effects */
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 480) {
        setIconDimension({
          width: "28.5",
          height: "28.5",
        });
      } else {
        setIconDimension({
          width: "40",
          height: "40",
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  /* Return Data */
  return {
    setHover,
    handleClick,
    renderLogo,
    getOptionSelectedStyles,
    renderResultLogo,
  };
};
