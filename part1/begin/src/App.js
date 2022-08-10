/* PASSING STATE TO CHILD COMPONENTS */
import { useState } from "react";



const App = () => {  

  // Component to display value of the counter
const Display = (props) =>{
  return(
    <div>{props.counter}</div>
  )
}

// Button Component
const Button = (props) =>{
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

  const [ counter, setCounter ] = useState(0)

  //Defining event handlers seperate from with JSX
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  
  return(
    <div>
      <Display counter={counter}/>
      {/* Event Handler removed from JSX and referenced above in a function */}
      <Button onClick={increaseByOne} text='plus'/>
      <Button onClick={setToZero} text='zero' />
      <Button onClick={decreaseByOne} text='minus'/>
      
    </div>
     
  )

  

  
  
}

export default App;
