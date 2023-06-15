import React from "react";
import {BsPlusCircleFill} from "react-icons/bs"
import {FaTrash} from "react-icons/fa"

function TodoList(){



    return(
     <div className="container bg-secondary">
      <h3 className="text-dark m-3">Todo List</h3>
      <input type="text" value={"newTodo"}/>
       <button className="btn btn-primary" ><BsPlusCircleFill/></button>  
       {/* <button className="btn btn-danger"><FaTrash/></button>   */}
       
     </div>
    )
}

export default TodoList;