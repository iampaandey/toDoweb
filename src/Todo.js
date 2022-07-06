import { ListItem } from '@mui/material';
import useToggle from './hooks/useToggle';
import Edittodo from './Edittodo';
import React from 'react';
import { ListItemText } from '@mui/material';
import { Checkbox } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from 'react';
import {ToDoContext} from "./context/toDo.context";

export default function Todo({id,task,completed}) {
    const{removeTodo,toggleTodo}=useContext(ToDoContext);
  const [isEditing,toggle]=useToggle(false);

  return (
    
       
      <ListItem>
        {isEditing?(<Edittodo id={id} task={task} toggle={toggle}/>) : (
          <>
      <Checkbox tabIndex={-1}  checked={completed} onClick={()=>toggleTodo(id)} />    
    <ListItemText style={{textDecoration:completed?"line-through" :"none"}}>{task}</ListItemText>
    <ListItemSecondaryAction>
        <IconButton onClick={()=>removeTodo(id)}>
            <DeleteIcon/>
        </IconButton>
        <IconButton>
            <EditIcon onClick={toggle}/>
        </IconButton>
    </ListItemSecondaryAction>
    </>
    )}
    </ListItem>
  )
}
 