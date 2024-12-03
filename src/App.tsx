import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ThemeProvider } from "./context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const setDarkMode = () => {
    setThemeMode("dark");
  };

  const setLightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, setDarkMode, setLightMode }}>
      <div className={`wrapper ${themeMode === "dark" ? "bg-dark-img" : ""}`}>
        <main className="container">
          <Header iconUrl="../images/icon-html.svg" hasLogo />
          <ThemeSwitcher />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
