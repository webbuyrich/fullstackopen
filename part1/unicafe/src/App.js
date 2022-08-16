import { useState } from "react";
//heading
const MainHeading = (props) => <h1>{props.text}</h1>

//buttons
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

//stats heading
const StatsHeading = (props) => <h2>{props.text}</h2>

//value displays
const Statistics = (props) => <div>{props.text} {props.value}</div>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => {
    setGood(newValue)
  }
  const setToNeutral = (newValue) => {
    setNeutral(newValue)
  }
  const setToBad = (newValue) => {
    setBad(newValue)
  }



  return (
    <div>
      <MainHeading text="give feedback"/>
      <Button handleClick={()=> setToGood(good + 1)} text="good" />
      <Button handleClick={()=> setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={()=> setToBad(bad + 1)} text="bad" />
      <StatsHeading text="statistics" />
      <Statistics text="good" value={good}/>
      <Statistics text="neutral" value={neutral}/>
      <Statistics text="bad" value={bad}/>

    </div>
  )
}

export default App;
