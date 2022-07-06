
import React from 'react';
import { List } from '@mui/material';
import { Paper } from '@mui/material';
import { Divider } from '@mui/material';
import Todo from './Todo';
import { useContext } from 'react';
import {ToDoContext} from "./context/toDo.context";


export default function TodoList() {
  const {toDo}=useContext(ToDoContext);
  if(toDo.length) return (
    <Paper>
        <List>
      {toDo.map((todo,i)=>(
          <>
          <Todo {...todo} key={todo.id}/>
         { i < toDo.length - 1  && <Divider/> }
          </>
      ))}
      </List>
    </Paper>
  )
  return null;
}
