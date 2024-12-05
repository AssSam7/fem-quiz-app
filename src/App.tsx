import { Header } from "./components/Header";
import { QuizCard } from "./components/QuizCard";
import { QuizContent } from "./components/QuizContent";
import { ThemeProvider } from "./context/Theme";
import useAppData from "./hooks/useAppData";

function App() {
  const { themeMode, themeModeClass, setDarkMode, setLightMode } = useAppData();

  return (
    <ThemeProvider value={{ themeMode, setDarkMode, setLightMode }}>
      <div className={`wrapper ${themeModeClass}`}>
        <main className="container">
          <Header />

          <QuizCard>
            <QuizContent />
          </QuizCard>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
