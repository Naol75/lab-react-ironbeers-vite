import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeWrapper(props) {
  const [isThemeDark, setIsThemeDark] = useState(false);

  const handleSwitchTheme = () => {
    setIsThemeDark(!isThemeDark);
  };

  const backgroundThemeClassName = isThemeDark ? "dark-beer-background" : "beer-background";
  const btnThemeClassName = isThemeDark ? "dark-btn" : "fancy-btn";
  const titleThemeClassName = isThemeDark ? "dark-title" : "title";
  const cardThemeClassName = isThemeDark ? "dark-card-container" : "card-container";
  const randomBackgroundClassName = isThemeDark ? "dark-random-beer-page" : "random-beer-page";

  const passedContext = {
    isThemeDark,
    handleSwitchTheme,
    btnThemeClassName,
    cardThemeClassName,
    titleThemeClassName,
    backgroundThemeClassName,
    randomBackgroundClassName,
  };

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeWrapper };