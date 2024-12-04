import { Logo } from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";
type HeaderProps = {
  hasLogo?: boolean;
  iconUrl: string;
};

export const Header = (props: HeaderProps) => {
  const { hasLogo, iconUrl } = props;
  return (
    <div className="header">
      {hasLogo ? <Logo icon={iconUrl} bgColor="#FFF1E9" /> : null}
      <ThemeSwitcher />
    </div>
  );
};
