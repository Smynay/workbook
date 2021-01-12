import { useState } from 'react';
import { Transition } from 'react-transition-group';

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="container">
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <hr />
      <div className="blocks">
        <Transition
          in={toggle}
          timeout={{ enter: 1000, exit: 500 }}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('Enter')}
          onExit={() => console.log('Exit')}
          onEntered={() => console.log('Entered')}
          onExited={() => console.log('Exited')}
          onEntering={() => console.log('Entering')}
          onExiting={() => console.log('Exiting')}
        >
          {(state) => <div className={`square blue ${state}`}>{state}</div>}
        </Transition>
      </div>
    </div>
  );
}

export default App;
