/* adding props to components */
const Hello = (props) =>{
  return(
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

/* render multiple components inside a component */
const App = () => {
  
  return(
    <div>
      <h1>Greeting</h1>
      {/* render the Hello component inside the App component */}
      <Hello name="Richard"/>
      <Hello name="Dee"/>
      <Hello name="N/A"/>
    </div>
  )
}

export default App;
