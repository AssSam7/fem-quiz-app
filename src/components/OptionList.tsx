// @flow
import { OptionType } from "../types";
import { Option } from "./Option";

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
