import useSelectData from "../hooks/useSelectData";
import { Logo } from "./Logo";

export const QuizResultCard = () => {
  const { quizQuestions, quizScore, totalQuestions } = useSelectData();
  return (
    <div className="w-full flex mt-[80px] justify-between">
      <h2 className="w-[40%] text-dark-navy dark:text-pure-white font-extralight">
        Quiz completed
        <p className="font-bold">You scored...</p>
      </h2>

      <div className="w-[45%] flex flex-col gap-[32px]">
        <div className="flex flex-col items-center gap-[28px] bg-pure-white dark:bg-navy rounded-2xl p-10">
          <div className="flex gap-5 items-center">
            <Logo
              icon={quizQuestions?.icon}
              bgColor={quizQuestions?.iconFillColor}
            />
            <p className="text-dark-navy dark:text-pure-white text-[28px] sm:text-[18px]">
              {quizQuestions?.title}
            </p>
          </div>
          <div>
            <h1 className="text-dark-navy dark:text-pure-white font-semibold">
              {quizScore}
            </h1>
            <p className="text-grey-navy text-[24px] dark:text-pure-white font-light">
              out of {totalQuestions}
            </p>
          </div>
        </div>
        <button className="btn-primary">Play again</button>
      </div>
    </div>
  );
};
