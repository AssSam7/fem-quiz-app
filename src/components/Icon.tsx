import { useEffect, useState } from "react";

type Props = {
  url: string;
};
export const Icon = (props: Props) => {
  const { url } = props;
  const [icon, setIcon] = useState("");

  useEffect(() => {
    async function importIcon() {
      const importedIcon = await import(`${url}`);
      setIcon(importedIcon.default);
    }
    importIcon();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [icon]);
  return <img src={icon} />;
};
