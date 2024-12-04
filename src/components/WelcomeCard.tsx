import { QuizSubjectProvider } from "../context/QuizSubjects";
import useWelcomeCardData from "../hooks/useWelcomeCardData";
import { OptionList } from "./OptionList";
import { WelcomeContent } from "./WelcomeContent";

export const WelcomeCard = () => {
  const { subjects, setSubjectData } = useWelcomeCardData();

  return (
    <div className="welcome-card">
      <WelcomeContent />
      <QuizSubjectProvider value={{ subjects, setSubjectData }}>
        <OptionList className="option-list" list={subjects} />
      </QuizSubjectProvider>
    </div>
  );
};
