import { Icon } from "./Icon";

type LogoProps = {
  icon?: string;
  bgColor?: string;
  text?: string;
  className?: string;
  iconWidth?: string;
  iconHeight?: string;
};

export const Logo = (props: LogoProps) => {
  const { icon, bgColor, text, className } = props;

  return (
    <div
      className={`logo ${
        !icon ? "hover:option-hover-logo-styles" : ""
      } ${className}`}
      style={bgColor ? { backgroundColor: bgColor } : {}}
    >
      {icon ? (
        <Icon url={icon} width={props?.iconWidth} height={props?.iconHeight} />
      ) : (
        <span className="text-base font-normal">{text}</span>
      )}
    </div>
  );
};
