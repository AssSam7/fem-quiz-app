// @flow
import { useEffect } from "react";
import useQuizSubjects from "../context/Quiz";
import { Option } from "./Option";

export type OptionType = {
  id: number;
  title: string;
  icon?: string;
  iconFillColor?: string;
  handleClick?: () => void;
};

type Props = {
  className?: string;
  list: OptionType[];
};

export const OptionList = (props: Props) => {
  const { className, list } = props;
  const { quiz, setQuiz } = useQuizSubjects();

  const handleQuizStart = (id: number) => {
    const filteredSubs = quiz.filter((sub) => sub.id === id);
    setQuiz(filteredSubs);
    console.log(id);
  };

  useEffect(() => {
    console.log(quiz);
  }, [quiz]);

  return (
    <ul className={className}>
      {list.map((item) => (
        <Option
          key={item.id}
          {...item}
          handleClick={() => handleQuizStart(item.id)}
        />
      ))}
    </ul>
  );
};
