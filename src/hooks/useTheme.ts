import { useContext } from 'react'
import { ThemeContext } from '../components/Theme'

const useTheme = () => {
    const themeInfo = useContext(ThemeContext)
    return themeInfo
}

export default useTheme;