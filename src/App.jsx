import { useReducer, useState } from 'react'

import './App.css'
import workReducer from './Components/WorkReducer';
import Task from './Components/Task';


export default function App() {
  const [tasks, dispatch] = useReducer(workReducer, initialTask);
  const [brandNew, setBrandNew] = useState("");

  // Functions for handling actions happening inside application
  function handleAdd (e, title) {
    e.preventDefault();
    dispatch(
      {
        type: "new!",
        id: Date.now(), 
        // A way to give a new id^^
        title: brandNew,
      });
      setBrandNew("");
      // Empties field for another input (another task)^^
  }

  function handleEdit (id, title) {
    const update = prompt(title);
    if (update) {
    dispatch({
      type: "edit!",
      task: { id, title: update, completed: false }
    });
  }
}

  function handleDeleted(id) {
    dispatch({
      type: "delete!", 
      id: id,
    });
  }
  // Functions for handling actions happening inside application^^

  
// User screen
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
          handleEdit={handleEdit}
          handleDeleted={handleDeleted}
        />
      ))}
    </>
  )
};
// User screen^^


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
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Develop a mask",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "Move to Tokyo, then visit Egypt, then go back to Tokyo, or maybe stay in Egypt for a while",
    "completed": false
  },
  {
    "userId": 1,
    "id": 5,
    "title": "Find a very nice place with very, very, very, super delicious ramen. Eat there!",
    "completed": false
  }
];

