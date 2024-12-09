import useOptionListData from "../hooks/useOptionListData";

type Props = {
  className?: string;
};

export const OptionList = (props: Props) => {
  const { className } = props;

  const {
    quizStarted,
    renderOptionListButton,
    renderQuizOptions,
    renderErrorMessage,
  } = useOptionListData();

  return window.innerWidth <= 767 ? (
    <>
      <div className="options-container">
        <ul className={className}>{renderQuizOptions()}</ul>

        {quizStarted ? (
          <div className="col-start-2 w-full flex flex-col gap-5 text-[24px] text-red">
            {renderOptionListButton()}
            {renderErrorMessage()}
          </div>
        ) : null}
      </div>
    </>
  ) : (
    <>
      <div className="options-container">
        <ul className={className}>{renderQuizOptions()}</ul>
      </div>
      {quizStarted ? (
        <div className="col-start-2 w-full flex flex-col gap-5 text-[24px] text-red">
          {renderOptionListButton()}
          {renderErrorMessage()}
        </div>
      ) : null}
    </>
  );
};
