import { Logo } from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";
type HeaderProps = {
  iconUrl: string | null;
  iconFillColor?: string;
};

export const Header = (props: HeaderProps) => {
  const { iconUrl, iconFillColor } = props;
  return (
    <div className="header">
      {iconUrl ? <Logo icon={iconUrl} bgColor={iconFillColor} /> : null}
      <ThemeSwitcher />
    </div>
  );
};
