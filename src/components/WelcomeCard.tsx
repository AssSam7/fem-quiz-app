import { OptionList } from "./OptionList";
import { WelcomeContent } from "./WelcomeContent";

export const WelcomeCard = () => {
  const data = [
    {
      title: "HTML",
      icon: "../assets/images/icon-html.svg",
      iconFillColor: "#FFF1E9",
    },
    {
      title: "CSS",
      icon: "../assets/images/icon-css.svg",
      iconFillColor: "#E0FDEF",
    },
    {
      title: "Javascript",
      icon: "../assets/images/icon-js.svg",
      iconFillColor: "#EBF0FF",
    },
    {
      title: "Accessibility",
      icon: "../assets/images/icon-accessibility.svg",
      iconFillColor: "#F6E7FF",
    },
  ];
  return (
    <div className="welcome-card">
      <WelcomeContent />
      <OptionList className="option-list" list={data} />
    </div>
  );
};
