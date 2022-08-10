/* EVENT HANDLING */
import { useState } from "react";

const App = () => {

  const [ counter, setCounter ] = useState(0)

  //Defining event handlers seperate from with JSX
  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)
  
  return(
    <div>
      <div>{counter}</div>
      {/* Event Handler removed from JSX and referenced above in a function */}
      <button onClick={increaseByOne}>
        plus       
      </button>
      <button onClick={setToZero}>
        reset       
      </button>
    </div>
     
  )

  
  
}

export default App;
