import { Header } from "./components/Header";
import { QuestionContent } from "./components/QuestionContent";
import { QuizCard } from "./components/QuizCard";
import { WelcomeContent } from "./components/WelcomeContent";
import { ThemeProvider } from "./context/Theme";
import useAppData from "./hooks/useAppData";

function App() {
  const {
    themeMode,
    themeModeClass,
    setDarkMode,
    setLightMode,
    quizStarted,
    currentQuestionIndex,
    totalQuestions,
  } = useAppData();

  return (
    <ThemeProvider value={{ themeMode, setDarkMode, setLightMode }}>
      <div className={`wrapper ${themeModeClass}`}>
        <main className="container">
          <Header />

          <QuizCard>
            {quizStarted ? (
              <QuestionContent
                question=""
                questionNumber={
                  currentQuestionIndex !== null
                    ? currentQuestionIndex + 1
                    : null
                }
                totalQuestions={totalQuestions}
              />
            ) : (
              <WelcomeContent />
            )}
          </QuizCard>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
