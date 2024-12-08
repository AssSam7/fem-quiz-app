import { useAppSelector } from "../app/hooks";

export const QuestionProgress = () => {
  const currentQuestionIndex = useAppSelector(
    (state) => state.currentQuestionIndex
  );
  const totalQuestions = useAppSelector((state) => state.totalQuestions);
  const questionProgressWidth = `${
    (((currentQuestionIndex ?? 0) + 1) / (totalQuestions ?? 1)) * 100
  }%`;

  return (
    <div className="w-full rounded-2xl bg-pure-white dark:bg-navy p-1 h-[16px] flex">
      <p
        className="bg-purple h-[8px] rounded-2xl"
        style={{ width: questionProgressWidth }}
      ></p>
    </div>
  );
};
