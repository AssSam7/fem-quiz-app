// @flow
import * as React from "react";
type Props = {
  url: string;
};
export const Icon = (props: Props) => {
  const { url } = props;
  const [icon, setIcon] = React.useState("");

  React.useEffect(() => {
    async function importIcon() {
      const importedIcon = await import(`../assets/images/${url}`);
      setIcon(importedIcon.default);
    }
    console.log(icon);
    importIcon();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [icon]);
  return (
    <div>
      <img src={icon} />
    </div>
  );
};
