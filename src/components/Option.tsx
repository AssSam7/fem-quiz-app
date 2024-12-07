// @flow
import { useOptionData } from "../hooks/useOptionData";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = (any | string[]) & {
  handleOptionClick: (subjectId: string) => void;
};

export const Option = (props: Props) => {
  const {
    setHover,
    handleClick,
    renderLogo,
    getOptionSelectedStyles,
    renderResultLogo,
  } = useOptionData(props);

  return (
    <li
      className={`option ${getOptionSelectedStyles()} ${
        props?.optionBorderStyles
      }`}
      role="button"
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {renderLogo()}
      <p className="text-dark-navy font-medium text-base dark:text-pure-white">
        {props?.title}
      </p>
      {renderResultLogo()}
    </li>
  );
};
