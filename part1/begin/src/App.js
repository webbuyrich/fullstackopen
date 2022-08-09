/* adding props to components */
const Hello = (props) =>{
  
  const name = props.name
  const age = props.age
  /*Guessing the year of person being greeted */
  const bornYear = () =>  new Date().getFullYear() - age
 

  return(
    <div>
      <p>Hello {name}, you said you are {age} years old</p>
      <p>So you were probably born around the year {bornYear()} right?</p>
      <br />
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

/* render multiple components inside a component */
const App = () => {
  const name  = 'Richard'
  const age   = 42
  return(
    <div>
      <h1>Greeting</h1>
      {/* render the Hello component inside the App component */}
      <Hello name={name} age={age}/>
      <Hello name="Dee" age={32+9}/>
      <Hello name="N/A" age='N/A'/>
      <Footer />
    </div>
  )
}

export default App;
