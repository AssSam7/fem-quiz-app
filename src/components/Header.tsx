import useHeaderData from "../hooks/useHeaderData";
import { Logo } from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  const { quizQuestions } = useHeaderData();
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
