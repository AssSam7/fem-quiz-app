// @flow

import { Logo } from "../components/Logo";
import useSelectData from "./useSelectData";

export const useHeaderData = () => {
  const { quizQuestions } = useSelectData();

  const renderHeaderLogo = () => {
    return quizQuestions?.icon ? (
      <Logo icon={quizQuestions?.icon} bgColor={quizQuestions?.iconFillColor} />
    ) : null;
  };

  return {
    renderHeaderLogo,
  };
};
