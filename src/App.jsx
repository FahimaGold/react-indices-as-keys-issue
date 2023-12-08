import {  useState, useEffect, useRef } from 'react'


function App() {
  const [tasks, setTask] = useState([{id: 1, task: "some task"}])
  
  useEffect(() => {
    console.log("render...")
  }, [tasks])
  
  let nextId = useRef(2);
  const addTask = (newItem) =>{
    setTask ((prevArray) => [newItem, ...prevArray]);
    nextId.current++;
  }
  return (
    <>
    <div>

    <ul>
     {tasks.map((task, i) => (
       <li key={i}>index : {i}, {task.task} with id: {task.id}</li>
    ))}
     </ul>
     
     <button onClick={() => addTask({id: nextId.current,task: "Another task"})}>Add task</button>
     </div>
    </>
  )
}

export default App
