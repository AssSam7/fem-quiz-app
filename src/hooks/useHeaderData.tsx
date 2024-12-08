// @flow

import { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import useSelectData from "./useSelectData";

export const useHeaderData = () => {
  const { quizQuestions } = useSelectData();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [iconDimesions, setIconDimension] = useState(
    windowWidth < 480
      ? {
          width: "28.5",
          height: "28.5",
        }
      : {
          width: "40",
          height: "40",
        }
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 480) {
        setIconDimension({
          width: "28.5",
          height: "28.5",
        });
      } else {
        setIconDimension({
          width: "40",
          height: "40",
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const renderHeaderLogo = () => {
    return quizQuestions?.icon ? (
      <div className="flex gap-5 items-center">
        <Logo
          icon={quizQuestions?.icon}
          bgColor={quizQuestions?.iconFillColor}
          iconWidth={iconDimesions.width}
          iconHeight={iconDimesions.height}
        />
        <p className="text-dark-navy dark:text-pure-white text-[28px] sm:text-[18px]">
          {quizQuestions.title}
        </p>
      </div>
    ) : null;
  };

  return {
    renderHeaderLogo,
  };
};
