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
    <div className="h-[56px] w-[56px] p-3 flex items-center justify-center">
      <img src={icon} />
    </div>
  );
};
