import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15)

  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    if(counter < 20) {
      setCounter(counter + 1);
    } else {
      setCounter(20);
    }
    console.log("value added", counter);
  }
 
  const removeValue = () => {
    // counter = counter - 1;
    if(counter > 0){
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
    console.log("value removed", counter);
  }

	return (
		<>
			<h1>Chai Aur React</h1>
			<h2>Counter Value: {counter}</h2>

			<button onClick={addValue}>Add Value {counter}</button>
      <br />
			<button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
		</>
	);
}

export default App;
