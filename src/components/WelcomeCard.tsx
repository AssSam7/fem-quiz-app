import { OptionType } from "../types";
import { OptionList } from "./OptionList";
import { WelcomeContent } from "./WelcomeContent"; // Import OptionType from OptionList

type Props = {
  list: OptionType[]; // Change type of list prop to OptionType[]
};
export const WelcomeCard = ({ list: quiz }: Props) => {
  return (
    <div className="welcome-card">
      <WelcomeContent />

      <OptionList className="option-list" list={quiz} />
    </div>
  );
};
