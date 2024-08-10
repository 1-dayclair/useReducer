import { useReducer, useState } from 'react'

import './App.css'
import workReducer from './Components/WorkReducer';


export default function App() {
  const [tasks, dispatch] = useReducer(workReducer, initialTask);

  function handleAdd (titles) {
    dispatch(
      {
        type: "added",
        userId: 1,
        id: 1,
        title: title,
      });
  }

  function handleEdit (task) {
    dispatch({
      type: "added",
      userId: 1,
      id: 1,
      title: title,
    });
  }

  function handleDeleted(id) {
    dispatch({
      type: "deleted",
      userId: 1, 
      id: id,
    });
  }

  return (
    <>
      <h1>Do You Have Anything You Should Be Doing Now?</h1>
    </>
  )
};


const initialTask = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  }
];

