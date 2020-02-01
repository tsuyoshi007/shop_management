import * as React from 'react'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import createTheme, { ThemeColors } from '../../themeConfig'

// update later 
const darkColor: ThemeColors = {
    primary: "#13BEBB",
    secondary: "#21125E",
    background: {
        default: "#89AEB2",
        paper: "#e1e8e3"
    }
}

// update later
const lightColor: ThemeColors = {
    primary: "#13BEBB",
    secondary: "#21125E",
    background: {
        default: "#1D1E1F",
        paper: "#2E2F31"
    }
}

interface ThemeProviderProps {
    isDefaultDark?: boolean
}

interface ThemeContext {
    isDark?: boolean
    toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContext>({
    isDark: false,
    toggleTheme: () => undefined
})


const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    isDefaultDark
  }) => {
    const [isDark, setDark] = React.useState(isDefaultDark)
    const toggleTheme = () => {
      setDark(!isDark)
      localStorage.setItem("theme", (!isDark).toString())
    }
  
    return (
        <ThemeContext.Provider
        value={{
            isDark,
            toggleTheme
        }}>
            <MuiThemeProvider theme={createTheme(isDark? darkColor: lightColor)}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}


export default ThemeProvider