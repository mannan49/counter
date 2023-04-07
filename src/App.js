import {useState} from 'react'
import './App.css';
import './little.css'
// Hooks
function App() {
  // let counter = 0  //Simple Variable
  const  [counter,setCounter] = useState(0);
  function addOne(){
    setCounter(counter+1)
  }
  function addFive(){
    setCounter(counter+5)
  }
  function subtractOne(){
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      alert("Value is negative")
    }
  }
  function subtractFive(){
    let newCounter = counter-5
    if(newCounter>0){
      setCounter(newCounter)
    }
    else{
      alert("Value is negative")
    }
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <p>The Counter value is: {counter}</p>
      <button onClick={addOne}>Add 1</button>
      <button onClick={subtractOne}>Subtract 1</button>
      <button onClick={addFive}>Add 5</button>
      <button onClick={subtractFive}>Subtract 5</button>
    </div>
    
  );
}

export default App;
