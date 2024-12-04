import { Option } from "./Option";
import { WelcomeContent } from "./WelcomeContent";

export const WelcomeCard = () => {
  const data = [
    { title: "HTML", icon: "../images/icon-html.svg", bgColor: "#FFF1E9" },
    { title: "CSS", icon: "../images/icon-css.svg", bgColor: "#E0FDEF" },
    { title: "Javascript", icon: "../images/icon-js.svg", bgColor: "#EBF0FF" },
    {
      title: "Accessibility",
      icon: "../images/icon-accessibility.svg",
      bgColor: "#F6E7FF",
    },
  ];
  return (
    <div className="welcome-card">
      <WelcomeContent />
      <ul className="w-[35vw] flex flex-col justify-between">
        {data.map((item, i) => (
          <Option
            id={i + 1}
            title={item.title}
            iconUrl={item.icon}
            iconFillColor={item.bgColor}
          />
        ))}
      </ul>
    </div>
  );
};
