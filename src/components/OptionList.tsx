// @flow
import { useAppDispatch } from "../app/hooks";
import { selectQuizSubject } from "../features/quiz/quizSlice";
import { QuizSubject } from "../types";
import { Option } from "./Option";

type Props = {
  className?: string;
  list: QuizSubject[];
};

export const OptionList = (props: Props) => {
  const { className, list } = props;

  const dispatch = useAppDispatch();

  const handleOptionClick = (id: string) => {
    dispatch(selectQuizSubject(id));
  };

  return (
    <ul className={className}>
      {list.map((item) => (
        <Option key={item.id} {...item} handleOptionClick={handleOptionClick} />
      ))}
    </ul>
  );
};
