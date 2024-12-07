/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch } from "../app/hooks";
import { Option } from "../components/Option";
import { selectQuizSubject } from "../features/quiz/quizSlice";
import useSelectData from "./useSelectData";

const useOptionListData = () => {
  const transformOptions = (options: string[] | null) => {
    return options?.map((option: string, i) => ({
      id: i + 1,
      title: option,
    }));
  };

  const { quizSubjects, quizStarted, currentOptions } = useSelectData();

  const quizOptions = quizStarted
    ? transformOptions(currentOptions)
    : quizSubjects;

  const dispatch = useAppDispatch();

  const handleOptionClick = (id: string) => {
    dispatch(selectQuizSubject(id));
  };

  const getOptionsContainerHeightStyles = () =>
    quizStarted ? { height: "65vh" } : {};

  const renderOptionListButton = () => {
    return quizStarted ? (
      <button className="mt-5 bg-purple text-pure-white p-7 rounded-2xl text-base font-semibold hover:bg-purple/50 h-[92px] col-start-2">
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

  return {
    getOptionsContainerHeightStyles,
    renderOptionListButton,
    renderQuizOptions,
  };
};

export default useOptionListData;
