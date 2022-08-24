import React, { useState } from "react";
function Child({ val1 }) {
    const [counter, setCount] = useState(val1);
    const [value, doubleValue] = useState(val1);
    return (
      <>
     <p>value is {val1} and incremented  {counter} </p>  
              <button onClick={() => setCount(counter + 1)}>Click me</button>
            
      
      <p>value is {val1} and Doubles the value  {(value *2)} </p>
      <button onClick={() => doubleValue(value *2)}>Double</button>
      </>
    );
  }
  export default Child;  
  