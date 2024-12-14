import { useEffect, useState } from "react";

type Props = {
  url: string;
  className?: string;
  width?: string;
  height?: string;
};

export const Icon = (props: Props) => {
  const { url } = props;
  const [icon, setIcon] = useState<string>("");

  useEffect(() => {
    // Use the URL directly without dynamic import
    setIcon(`/assets/images/${url}`);
  }, [url]);

  return (
    <img
      src={icon}
      className={props?.className}
      width={props?.width}
      height={props?.height}
      alt=""
    />
  );
};
