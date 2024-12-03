import { Icon } from "./Icon";

type LogoProps = {
  iconUrl: string;
  bgColor: string;
};

export const Logo = (props: LogoProps) => {
  const { iconUrl, bgColor } = props;

  return (
    <div className="logo" style={{ backgroundColor: bgColor }}>
      <Icon url={iconUrl} />
    </div>
  );
};
