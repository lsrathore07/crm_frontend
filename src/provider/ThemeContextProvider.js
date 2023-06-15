import { createContext } from "react"
import { useState } from "react"

const ThemeContext = createContext();

function ThemeContextProvider(props){

const [theme,setTheme]=useState("")
return (
    <ThemeContext.Provider value={theme}>
       {props.children}
    </ThemeContext.Provider>
)
}

export default ThemeContext
export {ThemeContextProvider}