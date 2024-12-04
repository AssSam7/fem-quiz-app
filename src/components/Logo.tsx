import { Icon } from "./Icon";

type LogoProps = {
  icon: string;
  bgColor?: string;
};

export const Logo = (props: LogoProps) => {
  const { icon, bgColor } = props;

  return (
    <div className="logo" style={{ backgroundColor: bgColor }}>
      <Icon url={icon} />
    </div>
  );
};
