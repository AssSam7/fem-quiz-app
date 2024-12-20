/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { Icon } from "../components/common/Icon";
import { Option } from "../components/Option";
import {
  proceedToNextQuestion,
  selectQuizSubject,
  submitAnswer,
} from "../features/quiz/quizSlice";
import useSelectData from "./useSelectData";

const useOptionListData = () => {
  /* RTK Selectors */
  const {
    quizSubjects,
    quizStarted,
    currentOptions,
    selectedAnswer,
    isAnswerSubmitted,
    isCorrectAnswerSelected,
    currentQuestionIndex,
    totalQuestions,
  } = useSelectData();

  /* States & Variables */
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const dispatch = useAppDispatch();

  /* Functional Logic */
  const transformOptions = (options: string[] | null) => {
    return options?.map((option: string, i) => ({
      id: i + 1,
      title: option,
    }));
  };
  const quizOptions = quizStarted
    ? transformOptions(currentOptions)
    : quizSubjects;
  const getOptionBorderStyles = (title: string) => {
    if (
      isAnswerSubmitted &&
      isCorrectAnswerSelected &&
      selectedAnswer === title
    ) {
      return "border-green border-4 option-correct";
    } else if (
      isAnswerSubmitted &&
      !isCorrectAnswerSelected &&
      selectedAnswer === title
    ) {
      return "border-red border-4 option-incorrect";
    }
    return "";
  };
  const getOptionListButtonText = () => {
    if (
      isAnswerSubmitted &&
      selectedAnswer &&
      (currentQuestionIndex ?? 1) < (totalQuestions ?? 1) - 1
    ) {
      return "Next Question";
    } else if (
      currentQuestionIndex === (totalQuestions ?? 1) - 1 &&
      isAnswerSubmitted
    ) {
      return "Finish Quiz";
    } else if ((selectedAnswer || !selectedAnswer) && !isAnswerSubmitted) {
      return "Submit Answer";
    }
  };

  /* Handler Functions */
  const handleOptionClick = (id: string) => {
    dispatch(selectQuizSubject(id));
  };
  const handlePostSubmitProcess = () => {
    dispatch(proceedToNextQuestion());
  };
  const handleListButtonClick = () => {
    if (!isAnswerSubmitted && selectedAnswer !== null) {
      dispatch(submitAnswer());
    } else if (selectedAnswer === null) {
      setShowErrorMsg(true);
      setTimeout(() => setShowErrorMsg(false), 2000);
    }

    if (isAnswerSubmitted && selectedAnswer) {
      handlePostSubmitProcess();
    }
  };

  /* Render Functions */
  const renderOptionListButton = () => {
    return quizStarted ? (
      <button className="btn-primary" onClick={handleListButtonClick}>
        {getOptionListButtonText()}
      </button>
    ) : null;
  };

  const renderQuizOptions = () => {
    return quizOptions
      ? quizOptions?.map((item: any, i: number) => (
          <Option
            key={item.id || i}
            handleOptionClick={handleOptionClick}
            optionBorderStyles={getOptionBorderStyles(item.title)}
            {...item}
          />
        ))
      : null;
  };

  const renderErrorMessage = () => {
    return showErrorMsg ? (
      <p className="flex gap-2 items-center justify-center pb-5">
        <Icon url="../../assets/images/icon-error.svg" /> Please select an
        answer
      </p>
    ) : null;
  };

  /* Return Data */
  return {
    quizStarted,
    renderOptionListButton,
    renderQuizOptions,
    renderErrorMessage,
  };
};

export default useOptionListData;
