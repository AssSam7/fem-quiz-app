import useTheme from "../context/Theme";

// @flow
export const WelcomeContent = () => {
  const { themeMode } = useTheme();

  return (
    <div
      className="welcome-content"
      style={themeMode === "dark" ? { color: "inherit" } : {}}
    >
      <h2 className="text-dark-navy dark:text-pure-white font-extralight">
        Welcome to the
        <p className="font-bold">Frontend Quiz!</p>
      </h2>
      <h4 className="font-rubik-italic font-light text-grey-navy dark:text-light-bluish text-[20px]">
        Pick a subject to get started
      </h4>
    </div>
  );
};
