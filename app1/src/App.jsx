import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(66)
  //let counter = 66

  const addValue = () =>{
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    //console.log(counter)
  }
  
  const removeValue = () =>{
    setCounter((counter) => counter - 1)
    setCounter((counter) => counter - 1)
    setCounter((counter) => counter - 1)
    setCounter((counter) => counter - 1)
    setCounter((counter) => counter - 1)
    //console.log(counter)
  }

  return (
    <>
      <h2>Welcome All.....</h2>
      <h1>React App1</h1>
      <h1>Counter {counter} </h1>
      <button onClick={addValue}>ADD</button>{"  "}
      <button onClick={removeValue}>DELETE</button>
      <p>footer {counter} </p>
    </>
  )
}

export default App
