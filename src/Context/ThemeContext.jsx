import { useContext, createContext, useState, useEffect } from 'react'

const themeContext = createContext();

export const useTheme = () => {

    return useContext(themeContext)
}

export const ThemeProvider = ({children}) => {
    const [iseDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () =>{
        setIsDarkMode((prev)=>!prev)
    }

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme)
    },[iseDarkMode])

    const theme = iseDarkMode ? "dark":"light"

    return <themeContext.Provider value={{theme,toggleTheme}}>{children}</themeContext.Provider>

}