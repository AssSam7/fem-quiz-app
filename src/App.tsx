import { Header } from "./components/Header";
import { WelcomeCard } from "./components/WelcomeCard";
import { QuizProvider } from "./context/Quiz";
import useAppData from "./hooks/useAppData";

function App() {
  const {
    quiz,
    setQuiz,
    themeMode,
    themeModeClass,
    setDarkMode,
    setLightMode,
  } = useAppData();

  return (
    <QuizProvider
      value={{ quiz, setQuiz, themeMode, setDarkMode, setLightMode }}
    >
      <div className={`wrapper ${themeModeClass}`}>
        <main className="container">
          <Header iconUrl="../assets/images/icon-html.svg" />
          <WelcomeCard list={quiz} />
        </main>
      </div>
    </QuizProvider>
  );
}

export default App;
