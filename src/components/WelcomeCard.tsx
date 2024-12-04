import { QuizSubjectProvider } from "../context/Quiz";
import useWelcomeCardData from "../hooks/useWelcomeCardData";
import { OptionList } from "./OptionList";
import { WelcomeContent } from "./WelcomeContent";

export const WelcomeCard = () => {
  const { quiz, setQuiz } = useWelcomeCardData();

  return (
    <div className="welcome-card">
      <WelcomeContent />
      <QuizSubjectProvider value={{ quiz, setQuiz }}>
        <OptionList className="option-list" list={quiz} />
      </QuizSubjectProvider>
    </div>
  );
};
