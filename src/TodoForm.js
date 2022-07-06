import { Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import useInput from './hooks/useInput'
import { useContext } from 'react';
import {ToDoContext} from "./context/toDo.context";

export default function TodoForm() {
    const [value,handleChange,reset]=useInput("");
   const {addTodo}=useContext(ToDoContext);
  return (
    <Paper style={{margin: "2rem 0" , padding:"0 2rem"}}>
        <form onSubmit={e=>{
            e.preventDefault();
            addTodo(value);
            reset();
        }}>
        {value}
        <TextField value={value} onChange={handleChange} margin='normal' label='Add New To-Do' fullWidth/>
        </form>
    </Paper>
  )
}
