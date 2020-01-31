import { Theme, createMuiTheme } from "@material-ui/core/styles";

export type ThemeColors = 
    Record<"primary" | "secondary", string> 
    & { 
        background: Record<"default" | "paper", string> 
    }

const theme = (colors: ThemeColors): Theme => 
    createMuiTheme({
        overrides:{
          // can overide the MUI component style
        },
        palette: {
            background: colors.background,
            primary: {
              contrastText: "#ffffff",
              main: colors.primary
            },
            secondary: {
              contrastText: "#ffffff",
              main: colors.secondary
            }
            // more errors, warning, success, grey, text
            // https://material-ui.com/customization/default-theme/ check here 
        },
        typography: {
          // texts
        }
    })

export default theme