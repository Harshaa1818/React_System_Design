import { useEffect } from "react"
import { useTheme } from "../Context/ThemeContext"


const Navbar = () => {
    const { theme, toggleTheme } = useTheme()

   
    
    
    return(
        <div style={{display:"flex"}}>
        
        <button style={{height:"30px", padding:0}} onClick={toggleTheme}>Toggle theme</button>
        </div>
    )
}

export default Navbar