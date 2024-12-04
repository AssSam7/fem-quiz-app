// @flow
import { Logo } from "./Logo";
import { OptionType } from "./OptionList";

export const Option = (props: OptionType) => {
  const { id, title, icon, iconFillColor } = props;

  return (
    <li className="option">
      {icon && <Logo key={id} bgColor={iconFillColor} icon={icon} />}
      <p className="text-dark-navy font-medium text-base dark:text-pure-white">
        {title}
      </p>
    </li>
  );
};
