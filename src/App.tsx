import { Header } from "./components/Header";
import { ThemeProvider } from "./context/Theme";
import useAppData from "./hooks/useAppData";

function App() {
  const { themeMode, setDarkMode, setLightMode, renderAppContent } =
    useAppData();

  return (
    <ThemeProvider value={{ themeMode, setDarkMode, setLightMode }}>
      <main className="container">
        <Header />

        {renderAppContent()}
      </main>
    </ThemeProvider>
  );
}

export default App;
