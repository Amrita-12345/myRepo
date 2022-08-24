// import React, { useState } from "react";
//import logo from './logo.svg';
//import './App.css';
//import ChildComponent from "./ChildComponent";
//import Child from "./Child";
//function App() {
  // const [counter, setCount] = useState(0);
  //  const [value, doubleValue] = useState(100);
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
//<ChildComponent name={"Priyanka"} age={26} ismarried={"false"} />
//<ChildComponent name={"shivika"} age={30} ismarried={"true"}/>
//<ChildComponent name={"Nehal"} age={24} ismarried={"false"}/>
//<Child val1={10}></Child>
       //{/* <p>You clicked {counter} times</p>   
              //<button onClick={() => setCount(counter + 1)}>Click me</button>
            
            //<p>You clicked for double the value-initial value- {value}-{(value *2)} </p>
            //<button onClick={() => doubleValue(value *2)}>Double</button>*/}
        
          //</header>
          //</div>
        //);
      //}
      
      //export default App;
      
          /*


      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
     
/*second code for 
// React - State - Basic Click Counter and Value Doubler 
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // State to store count value
  const [count, setCount] = useState(0);
  const [value, mulValue] = useState(100);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const doubleValue = () => {
    mulValue(value * 2);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>the Incremented counter is: {count}</p>
        <button onClick={incrementCount}>Increment Counter</button>
        <br></br>
        <p>Multiplied value here:{value}</p>

        <button onClick={doubleValue}>Double Value</button>
      </header>
    </div>
  );
}

export default App;*/
import logo from './logo.svg';
import './App.css';
import Child from "./Child";
function App() {
return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
      <Child val1={10}/>
       </header>
       </div>
        );
      }
      export default App;
      