import { useState } from 'react';
import './App.css'

function App() {
  // let counter = 15
  let [counter, setCounter] = useState(15)

  const addValue = () =>{
    counter = counter + 1 
    if (counter < 21) {
    setCounter(counter)
    }
    
  };
  const removeValue = () => {
    if (counter > 0){
    setCounter(counter - 1);
    }
  }

  return (
    <>
      <div>
        <h1>I am <i>Prathmesh Jagtap!</i> 😁 learning <u>ReactJs</u></h1>
        <h1>Counter value : {counter}</h1>
        <button onClick={addValue}>Add Value</button>
        <br /><br />
        <p>Value : {counter}</p>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App
