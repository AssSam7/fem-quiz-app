import { Header } from "./components/Header";
import { WelcomeCard } from "./components/WelcomeCard";
import { ThemeProvider } from "./context/Theme";
import useAppData from "./hooks/useAppData";
import data from "./data.json";

function App() {
  const { themeMode, themeModeClass, setDarkMode, setLightMode } = useAppData();

  return (
    <ThemeProvider value={{ themeMode, setDarkMode, setLightMode }}>
      <div className={`wrapper ${themeModeClass}`}>
        <main className="container">
          <Header iconUrl="../assets/images/icon-html.svg" />
          <WelcomeCard list={data.quizzes} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
