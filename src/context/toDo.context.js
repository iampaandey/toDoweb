import React from "react";
import { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodo =[{id:1,task:"Study C++",completed: false},
{id:2,task:"Do Development",completed:false}];

export const ToDoContext= createContext();

export function ToDoProvider(props){
    const toDoStuff = useTodoState(defaultTodo);
    return (
        <ToDoContext.Provider value={toDoStuff}>
         {props.children}
        </ToDoContext.Provider>
    )
}
