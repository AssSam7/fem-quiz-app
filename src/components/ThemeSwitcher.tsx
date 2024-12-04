import useTheme from "../context/Theme";
import { Icon } from "./Icon";

export const ThemeSwitcher = () => {
  const {
    themeMode: theme,
    setLightMode: lightTheme,
    setDarkMode: darkTheme,
  } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className="ml-auto flex gap-2 items-center">
      <Icon
        url={`../assets/images/icon-sun-${
          theme === "light" ? "dark" : "light"
        }.svg`}
      />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <div className="w-[48px] h-[28px] bg-[#A729F5] peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[101%] peer-checked:after:border-pure-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-pure-white after:rounded-full after:h-[20px] after:w-[20px] after:transition-all  peer-checked:bg-[#A729F5]"></div>
      </label>
      <Icon
        url={`../assets/images/icon-moon-${
          theme === "light" ? "dark" : "light"
        }.svg`}
      />
    </div>
  );
};
