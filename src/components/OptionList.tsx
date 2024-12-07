import useOptionListData from "../hooks/useOptionListData";

type Props = {
  className?: string;
};

export const OptionList = (props: Props) => {
  const { className } = props;

  const {
    getOptionsContainerHeightStyles,
    renderOptionListButton,
    renderQuizOptions,
  } = useOptionListData();

  return (
    <>
      <div
        className="options-container"
        style={getOptionsContainerHeightStyles()}
      >
        <ul className={className}>{renderQuizOptions()}</ul>
      </div>

      {renderOptionListButton()}
    </>
  );
};
