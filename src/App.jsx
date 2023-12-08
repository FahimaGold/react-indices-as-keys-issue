import {  useEffect } from 'react'


function App() {
  
  useEffect(() => {
    console.log("render...")
  }, [])
  let list = [{id: 1, task: "some task"}]
  return (
    <>
    <div>
      <button>Add task</button>
     <ul>
     {list.map((item, i) => {
      
      return <li key={i}>index : {i}, {item.task}</li>
     })}
     </ul>
     </div>
    </>
  )
}

export default App
