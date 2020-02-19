import * as React from "react";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import createTheme, { ThemeColors } from "../../themeConfig";

// update later
const darkColor: ThemeColors = {
  primary: "#f98866",
  secondary: "#ff420e",
  background: {
    default: "#ddd",
    paper: "#acd"
  }
};

// update later
const lightColor: ThemeColors = {
  primary: "#f98866",
  secondary: "#ff420e",
  background: {
    default: "#ddd",
    paper: "#ffffff"
  }
};

interface ThemeProviderProps {
  isDefaultDark?: boolean;
}

interface ThemeContext {
  isDark?: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContext>({
  isDark: true,
  toggleTheme: () => undefined
});

const ThemeProvider: React.FC<ThemeProviderProps> = props => {
  const { children, isDefaultDark } = props;
  const [isDark, setDark] = React.useState(isDefaultDark);
  const toggleTheme = () => {
    setDark(!isDark);
    localStorage.setItem("theme", (!isDark).toString());
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme
      }}
    >
      <MuiThemeProvider theme={createTheme(isDark ? darkColor : lightColor)}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
