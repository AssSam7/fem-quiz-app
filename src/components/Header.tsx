import { Logo } from "./Logo";
type HeaderProps = {
  hasLogo: boolean;
  iconUrl: string;
};

export const Header = (props: HeaderProps) => {
  const { hasLogo, iconUrl } = props;
  return (
    <div>{hasLogo ? <Logo iconUrl={iconUrl} bgColor="#FFF1E9" /> : null}</div>
  );
};
