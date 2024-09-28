import { useContext, createContext, useState, useEffect } from 'react'

const themeContext = createContext();

export const useTheme = () =>{
   return useContext(themeContext)
     
} 

export const ThemeProvider = ({children}) => {
    const[iseDarkMode, setIsDarkMode] = useState(false);

    const theme = iseDarkMode ? "dark":"light"

    const toggleTheme = () =>{
        setIsDarkMode(!iseDarkMode)
    }

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme)
    },[iseDarkMode])

   return <themeContext.Provider value={{theme,toggleTheme}}> {children} </themeContext.Provider>
}

