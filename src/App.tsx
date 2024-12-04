import { Header } from "./components/Header";
import { WelcomeCard } from "./components/WelcomeCard";
import { ThemeProvider } from "./context/Theme";
import useAppData from "./hooks/useAppData";

function App() {
  const { themeMode, themeModeClass, setDarkMode, setLightMode } = useAppData();

  return (
    <ThemeProvider value={{ themeMode, setDarkMode, setLightMode }}>
      <div className={`wrapper ${themeModeClass}`}>
        <main className="container">
          <Header iconUrl="../images/icon-html.svg" hasLogo />
          <WelcomeCard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
