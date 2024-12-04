// @flow
import { Logo } from "./Logo";
type Props = {
  id: number;
  title: string;
  iconUrl?: string;
  iconFillColor?: string;
};
export const Option = (props: Props) => {
  const { id, title, iconUrl, iconFillColor } = props;

  return (
    <li className="option">
      {iconUrl && <Logo key={id} bgColor={iconFillColor} iconUrl={iconUrl} />}
      <p className="text-dark-navy font-medium text-base dark:text-pure-white">
        {title}
      </p>
    </li>
  );
};
