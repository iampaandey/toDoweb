import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useLocalStorage} from "./useLocalStorage";

export default  intialToDo=>{
    const [toDo,setToDo]=useLocalStorage("toDo",intialToDo);

    return { toDo,
     addTodo : newText=>{
        setToDo([...toDo,{id:uuidv4(), task:newText, completed:false}])
    },
    removeTodo :  todoId =>{
        const updatedTodo = toDo.filter(todo=>todo.id!==todoId);
        setToDo(updatedTodo);
    },
    toggleTodo : todoId=>{
        const updatedTodo = toDo.map(todo=> todo.id ===todoId ? {...todo, completed : !todo.completed} : todo);
        setToDo(updatedTodo);
        console.log(updatedTodo);
        }, EditTodo : (todoId,newTask)=>{
            const updatedTodo = toDo.map(todo=> todo.id ===todoId ? {...todo, task : newTask} : todo);
            setToDo(updatedTodo);
        }
    }

}







