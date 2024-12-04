// @flow
import { Option } from "./Option";
export type OptionType = {
  id?: number;
  title: string;
  icon?: string;
  iconFillColor?: string;
};

type Props = {
  className?: string;
  list: OptionType[];
};
export const OptionList = (props: Props) => {
  const { list } = props;

  return (
    <ul className="w-[35vw] flex flex-col justify-between">
      {list.map((item, i) => (
        <Option key={i} id={i + 1} {...item} />
      ))}
    </ul>
  );
};
