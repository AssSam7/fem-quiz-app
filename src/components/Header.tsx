import { useHeaderData } from "../hooks/useHeaderData";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  const { renderHeaderLogo } = useHeaderData();

  return (
    <div className="header">
      {renderHeaderLogo()}
      <ThemeSwitcher />
    </div>
  );
};
