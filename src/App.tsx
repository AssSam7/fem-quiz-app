import { Header } from "./components/Header";
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
    quizSubjects,
    quizStarted,
  } = useAppData();

  return (
    <ThemeProvider value={{ themeMode, setDarkMode, setLightMode }}>
      <div className={`wrapper ${themeModeClass}`}>
        <main className="container">
          <Header />

          <QuizCard list={quizSubjects}>
            {!quizStarted ? <WelcomeContent /> : null}
          </QuizCard>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
