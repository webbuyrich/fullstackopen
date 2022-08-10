/* USING A STATEFUL COMPONENT */
import { useState } from "react";

const App = () =>{
  /* making a funciton call. function useState will return an array with counter and setCounter variables */
  const [ counter, setCounter ] = useState(0)
  /*counter variable is assigned 0 */
  /*setCounter variable is assigned to a function that will be used to modify the state */
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return(
    <div>{counter}</div>
  )
}

export default App;
