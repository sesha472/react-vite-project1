import React, { useState } from 'react'

const Todo = () => {
  const [newtask, setnewtask] = useState('');
  const [todo, settodo] = useState([]);
  console.log(todo);

  const addTodoHandler=()=>{
    if(newtask.length >0 ){
    settodo([...todo,newtask])
    setnewtask('')
    }
  }

  const removietodoHandler=(index)=>{
       let updatedtodo=[...todo];
       updatedtodo.splice(index,1) 
       settodo([...updatedtodo])
       }
  return (
    <div>
     
      <ul>{todo.map((item,index)=>{
        return ( 
       <><li key={index} >{item}</li>   //insted index we have to give unique id othervise its delets not related items
       <button onClick={removietodoHandler}>remove</button> 
        </> 
      )
      })}</ul>

      <input type='text'
      value={newtask}
      onChange={(e)=>setnewtask(e.target.value)}
      placeholder='enter todo..' />

      <button onClick={addTodoHandler}>addtodo</button>
    </div>
  )
}

export default Todo
