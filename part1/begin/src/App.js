/* EVENT HANDLING */
import { useState } from "react";

const App = () => {

  const [ counter, setCounter ] = useState(0)


  return(
    <div>
      <div>{counter}</div>
      {/*Event Handler function defined directly in value assignemnt */}
      <button onClick={() => console.log('clicked')}>
        plus
      </button>
    </div>
  )
  
}

export default App;
