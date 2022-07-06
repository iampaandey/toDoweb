import { TextField } from "@mui/material";
import React from "react";
import useInput from "./hooks/useInput";
import { useContext } from "react";
import {ToDoContext} from "./context/toDo.context";


function Edittodo({id,task,toggle}){
    const{EditTodo}=useContext(ToDoContext);
    const[value,handleChange,reset]=useInput(task)
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            EditTodo(id,value);
            reset();
            toggle();
        }}
        style={{marginLeft:"1rem",width:"100%"}}>
        <TextField margin="normal" value={value} 
        onChange={handleChange} fullWidth autoFocus/>
        </form>
    );
}

export default Edittodo;