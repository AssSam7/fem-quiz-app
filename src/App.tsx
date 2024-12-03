import { Header } from "./components/Header";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="container">
      <Header iconUrl="../images/icon-html.svg" hasLogo />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
