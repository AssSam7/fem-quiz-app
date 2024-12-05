/* eslint-disable @typescript-eslint/no-explicit-any */
// @flow
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectQuizSubject } from "../features/quiz/quizSlice";
import { Option } from "./Option";

type Props = {
  className?: string;
};

const transformOptions = (options?: string[]) => {
  return options?.map((option: string, i) => ({ id: i + 1, title: option }));
};

export const OptionList = (props: Props) => {
  const { className } = props;
  const currentQuestionIndex = useAppSelector(
    (state) => state.currentQuestionIndex
  );
  const quizSubjects = useAppSelector((state) => state.quizSubjects);
  const quizQuestions = useAppSelector((state) => state.quizQuestions);
  const quizStarted = useAppSelector((state) => state.quizStarted);

  const quizOptions = quizStarted
    ? transformOptions(
        quizQuestions?.questions[currentQuestionIndex || 0].options
      )
    : quizSubjects;

  const dispatch = useAppDispatch();

  const handleOptionClick = (id: string) => {
    dispatch(selectQuizSubject(id));
  };

  return (
    <ul className={className}>
      {quizOptions
        ? quizOptions?.map((item: any, i: number) => (
            <Option
              key={item.id || i}
              {...item}
              handleOptionClick={handleOptionClick}
            />
          ))
        : null}
      {quizStarted && (
        <button className="mt-5 bg-purple text-pure-white p-7 rounded-2xl text-base font-semibold hover:bg-purple/50">
          Submit Answer
        </button>
      )}
    </ul>
  );
};
