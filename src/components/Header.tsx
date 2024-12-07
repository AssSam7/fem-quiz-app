import useSelectData from "../hooks/useSelectData";
import { Logo } from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  const { quizQuestions } = useSelectData();

  return (
    <div className="header">
      {quizQuestions?.icon ? (
        <Logo
          icon={quizQuestions?.icon}
          bgColor={quizQuestions?.iconFillColor}
        />
      ) : null}
      <ThemeSwitcher />
    </div>
  );
};
