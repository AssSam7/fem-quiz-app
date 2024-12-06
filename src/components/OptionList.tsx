/* eslint-disable @typescript-eslint/no-explicit-any */
// @flow
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectQuizSubject } from "../features/quiz/quizSlice";
import { Option } from "./Option";

type Props = {
  className?: string;
};

const transformOptions = (options: string[] | null) => {
  return options?.map((option: string, i) => ({ id: i + 1, title: option }));
};

export const OptionList = (props: Props) => {
  const { className } = props;
  const quizSubjects = useAppSelector((state) => state.quizSubjects);
  const quizStarted = useAppSelector((state) => state.quizStarted);
  const currentOptions = useAppSelector((state) => state.currentOptions);

  const quizOptions = quizStarted
    ? transformOptions(currentOptions)
    : quizSubjects;

  const dispatch = useAppDispatch();

  const handleOptionClick = (id: string) => {
    dispatch(selectQuizSubject(id));
  };

  return (
    <>
      <div
        className="options-container"
        style={quizStarted ? { height: "65vh" } : {}}
      >
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
        </ul>
      </div>
      {quizStarted && (
        <button className="mt-5 bg-purple text-pure-white p-7 rounded-2xl text-base font-semibold hover:bg-purple/50 h-[92px] col-start-2">
          Submit Answer
        </button>
      )}
    </>
  );
};
