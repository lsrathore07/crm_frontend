import React from "react";
import { useRef } from "react";

function Custom(){

    const inputRef= useRef(null)   
    const onButtonClick=()=>{

        inputRef.current.focus()
    }

return (
    <div>
        <input type="text" ref={inputRef}/>
        <input type="button" value="Focus the text" onClick={onButtonClick}/>
    </div>
)
}

export default Custom;