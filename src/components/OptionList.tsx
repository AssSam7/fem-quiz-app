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
    renderErrorMessage,
  } = useOptionListData();

  return (
    <>
      <div
        className="options-container"
        style={getOptionsContainerHeightStyles()}
      >
        <ul className={className}>{renderQuizOptions()}</ul>
      </div>

      <div className="col-start-2 w-full flex flex-col gap-5 text-[24px] text-red">
        {renderOptionListButton()}
        {renderErrorMessage()}
      </div>
    </>
  );
};
