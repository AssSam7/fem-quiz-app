import { Header } from "./components/Header";
import { ThemeProvider } from "./context/Theme";
import useAppData from "./hooks/useAppData";

function App() {
  const { themeMode, themeModeClass, setDarkMode, setLightMode } = useAppData();

  return (
    <ThemeProvider value={{ themeMode, setDarkMode, setLightMode }}>
      <div className={`wrapper ${themeModeClass}`}>
        <main className="container">
          <Header iconUrl="../images/icon-html.svg" hasLogo />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
