import { useReducer, useState } from 'react'

import './App.css'
import workReducer from './Components/WorkReducer';
import Task from './Components/Task';


export default function App() {
  const [tasks, dispatch] = useReducer(workReducer, initialTask);
  const [brandNew, setBrandNew] = useState("");

  function handleAdd (e, title) {
    e.preventDefault();
    dispatch(
      {
        type: "new!",
        id: 1,
        title: title,
      });
      setBrandNew("");
  }

  function handleEdit (task) {
    dispatch({
      type: "added",
      id: 1,
      title: title,
    });
  }

  function handleDeleted(id) {
    dispatch({
      type: "deleted", 
      id: id,
    });
  }

  return (
    <>
      <h1 style={{color: 'red', backgroundColor: 'black' }} >Do You Have Anything You Should Be Doing Now?</h1>
      <h3 style={{fontStyle: 'italic'}} > To Do List </h3>
      <form onSubmit={handleAdd}>
        <label>
        <input type="text" value={brandNew} onChange={(e) => setBrandNew(e.target.value)} />
        </label>
      <button style={{backgroundColor: 'black', color: 'white' }} >Add New!</button>
      </form>
      <h2 style={{ color: 'seagreen'}}>Make it Happen?</h2>
      {tasks.map((toDo) => (
        <Task 
          key={toDo.id}
          id={toDo.id}
          title={toDo.title}
          completed={toDo.completed}
        />
      ))}
      
    </>
  )
};


const initialTask = [
  {
    "userId": 1,
    "id": 1,
    "title": "Do 1,000,000 jumping jacks",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Take the tiger meat out of the fridge",
    "completed": false
  }
];

