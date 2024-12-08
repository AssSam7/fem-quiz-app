// @flow

import { Logo } from "../components/Logo";
import useSelectData from "./useSelectData";

export const useHeaderData = () => {
  const { quizQuestions } = useSelectData();

  const renderHeaderLogo = () => {
    return quizQuestions?.icon ? (
      <div className="flex gap-5 items-center">
        <Logo
          icon={quizQuestions?.icon}
          bgColor={quizQuestions?.iconFillColor}
        />
        <p className="text-dark-navy text-[28px]">{quizQuestions.title}</p>
      </div>
    ) : null;
  };

  return {
    renderHeaderLogo,
  };
};
