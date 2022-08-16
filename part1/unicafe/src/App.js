import { useState } from "react";
//heading
const MainHeading = (props) => <h1>{props.text}</h1>

//buttons
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

//stats heading
const StatsHeading = (props) => <h2>{props.text}</h2>

//value displays
const Statistic = (props) =>{
  return(
    <div>{props.text} {props.value}</div>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive}) => {
  // test if all prop has a value
  if(all === 0){
    // return message if true
    return(       
      <div>No feedback given</div>        
    )} else{
      // display data 
      return(
        <div>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral}/>
            <Statistic text="bad" value={bad}/>
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
          </div>        
      )
    }
}


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
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={(good - bad) / (good + neutral + bad)}
        positive={( good / (good + neutral + bad) * 100 )  + " %"}
      />

    </div>
  )
}

export default App;
