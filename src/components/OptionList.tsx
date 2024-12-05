// @flow
import { Option } from "./Option";

export type OptionType = {
  id: number;
  title: string;
  icon?: string;
  iconFillColor?: string;
  handleClick?: () => void;
};

type Props = {
  className?: string;
  list: OptionType[];
};

export const OptionList = (props: Props) => {
  const { className, list } = props;

  return (
    <ul className={className}>
      {list.map((item) => (
        <Option key={item.id} {...item} handleClick={() => {}} />
      ))}
    </ul>
  );
};
