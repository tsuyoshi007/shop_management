import { useContext } from 'react'
import { ThemeContext } from '../Providers/Theme'

const useTheme = () => {
    const themeInfo = useContext(ThemeContext)
    return themeInfo
}

export default useTheme;