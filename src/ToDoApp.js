import React from "react";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { ToDoProvider } from "./context/toDo.context";


function ToDoApp(){
    // const intialToDo= [{id:1,task:"Kick Vimal",completed: false}];
    // const {toDo,addTodo,removeTodo,toggleTodo,EditTodo}=useTodoState(intialToDo);
    // const intialToDo=[
    //    
    //     {id:2,task:"Throw Vimal",completed:false },
    //     {id:3,task:"Punch Vimal",completed:false }];

    //  useEffect(()=>{
    //      window.localStorage.setItem("toDo",JSON.stringify(toDo))
    //  },[toDo]);
    return(
     <Paper style={{padding:0,matign:0,height:"100vh",backgroundColor:"#fafafa"}} 
     >
    <AppBar color='primary' position="static" style={{height:"64px"}}>
    <Toolbar>
      <Typography color='inherit' >To-Do App</Typography>
    </Toolbar>

    </AppBar>
    <Grid container justifyContent='center' style={{marginTop:"1rem"}}>
        <Grid item xs={11} md={8} lg={4}>
    <ToDoProvider>        
    <TodoForm/>
    <TodoList></TodoList>
    </ToDoProvider>
    </Grid>
    </Grid>
     </Paper>
    )
}

export default ToDoApp;