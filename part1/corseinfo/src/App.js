/* adding props to components */
const Hello = (props) =>{
  return(
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
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
    <>
      <h1>Greeting</h1>
      {/* render the Hello component inside the App component */}
      <Hello name={name} age={age}/>
      <Hello name="Dee" age={32+9}/>
      <Hello name="N/A" age='N/A'/>
      <Footer />
      </>
  )
}

export default App;
