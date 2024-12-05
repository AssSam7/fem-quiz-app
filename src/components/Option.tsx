// @flow
import { QuizSubject } from "../types";
import { Logo } from "./Logo";

type Props = QuizSubject & {
  handleOptionClick: (subjectId: string) => void;
};

export const Option = (props: Props) => {
  const { id, title, icon, iconFillColor, handleOptionClick } = props;

  return (
    <li className="option" role="button" onClick={() => handleOptionClick(id)}>
      {icon && <Logo key={id} bgColor={iconFillColor} icon={icon} />}
      <p className="text-dark-navy font-medium text-base dark:text-pure-white">
        {title}
      </p>
    </li>
  );
};
