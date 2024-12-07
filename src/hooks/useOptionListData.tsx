/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch } from "../app/hooks";
import { Icon } from "../components/Icon";
import { Option } from "../components/Option";
import { selectQuizSubject, submitAnswer } from "../features/quiz/quizSlice";
import useSelectData from "./useSelectData";

const useOptionListData = () => {
  /* RTK Selectors */
  const {
    quizSubjects,
    quizStarted,
    currentOptions,
    selectedAnswer,
    isAnswerSubmitted,
  } = useSelectData();

  /* Variables */
  const dispatch = useAppDispatch();
  const getOptionsContainerHeightStyles = () =>
    quizStarted ? { height: "65vh" } : {};

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

  /* Handler Functions */
  const handleOptionClick = (id: string) => {
    dispatch(selectQuizSubject(id));
  };
  const handleListButtonClick = () => {
    dispatch(submitAnswer());
  };

  /* Render Functions */
  const renderOptionListButton = () => {
    return quizStarted ? (
      <button
        className="mt-5 bg-purple text-pure-white p-7 rounded-2xl text-base font-semibold hover:bg-purple/50 h-[92px]"
        onClick={handleListButtonClick}
      >
        Submit Answer
      </button>
    ) : null;
  };

  const renderQuizOptions = () => {
    return quizOptions
      ? quizOptions?.map((item: any, i: number) => (
          <Option
            key={item.id || i}
            handleOptionClick={handleOptionClick}
            {...item}
          />
        ))
      : null;
  };

  const renderErrorMessage = () => {
    return selectedAnswer === null && isAnswerSubmitted ? (
      <p className="flex gap-2 items-center justify-center">
        <Icon url="../assets/images/icon-error.svg" /> Please select an answer
      </p>
    ) : null;
  };

  /* Return data */
  return {
    getOptionsContainerHeightStyles,
    renderOptionListButton,
    renderQuizOptions,
    renderErrorMessage,
  };
};

export default useOptionListData;
