import React, { useState } from 'react';

function computeInitialCouter() {
  console.log('Some calculatios...');
  return Math.trunc(Math.random() * 20);
}

function App() {
  // const [counter, setCounter] = useState(computeInitialCouter());
  const [counter, setCounter] = useState(() => computeInitialCouter());

  const [state, setState] = useState({ title: 'Counter', date: Date.now() });

  const increment = () => {
    // setCounter(counter + 1); not working
    // setCounter(counter + 1);
    setCounter((prev) => prev + 1); //good practice (for using same state, or dependences)
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: 'newName',
      };
    });
  }

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button className="btn btn-success" onClick={increment}>
        Add
      </button>
      <button className="btn btn-danger" onClick={decrement}>
        Remove
      </button>
      <button className="btn btn-default" onClick={() => updateTitle()}>
        Change
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
