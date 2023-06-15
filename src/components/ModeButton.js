import { useContext } from "react";
import "./darkLightModeToggle.css"
import { ThemeContext } from "../App";


const ModeButton=()=>{

    const value=useContext(ThemeContext);
    const {theme,setTheme}=value

    const onChangeTheme=()=>{
        if(theme==="light"){
            setTheme("dark")
           
        }
        else{
            setTheme("light")
            
        }
    }

    return (
        <label class="switch" >
                      <input type="checkbox" onClick={onChangeTheme}/>
                     <span class="slider"></span>
        </label>
    )
}

export default ModeButton;