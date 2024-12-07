import { Icon } from "./Icon";

type LogoProps = {
  icon?: string;
  bgColor?: string;
  text?: string;
  className?: string;
};

export const Logo = (props: LogoProps) => {
  const { icon, bgColor, text, className } = props;
  console.log(`BG Color: ${bgColor}`);

  return (
    <div
      className={`logo ${
        !icon ? "hover:option-hover-logo-styles" : ""
      } ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {icon ? (
        <Icon url={icon} />
      ) : (
        <span className="text-base font-normal">{text}</span>
      )}
    </div>
  );
};
