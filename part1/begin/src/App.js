/* EVENT HANDLING */
import { useState } from "react";

const App = () => {

  const [ counter, setCounter ] = useState(0)
  
  return(
    <div>
      <div>{counter}</div>
      {/*Event Handler function defined directly in value assignemnt */}
      <button onClick={() => setCounter(counter + 1)}>
        plus       
      </button>
      <button onClick={() => setCounter(0)}>
        zero       
      </button>
    </div>
     
  )

  
  
}

export default App;
