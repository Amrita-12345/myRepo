import { useState } from "react";
function App() {
    const [counter, setCount] = useState(1);
    const [value, setTodos] = useState(100);

return (
    <div className="App">
      
      

        <Routes
          element={
            <>
              <p>You clicked {counter} times</p>
              <button onClick={() => setCount(counter + 1)}>Click me</button>
            </>
            <p>You clicked {value} times</p>
            <button onClick={() => setTodos(value + 1)}>Double</button>
          </>
          }
        />

        
      </Routes>
    </div>
  );
}

export default App;

  