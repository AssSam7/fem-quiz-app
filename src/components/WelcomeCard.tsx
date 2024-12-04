import { Quiz } from "../context/Quiz";
import { OptionList } from "./OptionList";
import { WelcomeContent } from "./WelcomeContent";

type Props = {
  list: Quiz[];
};
export const WelcomeCard = ({ list: quiz }: Props) => {
  return (
    <div className="welcome-card">
      <WelcomeContent />

      <OptionList className="option-list" list={quiz} />
    </div>
  );
};
