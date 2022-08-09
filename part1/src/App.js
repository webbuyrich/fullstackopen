const Hello = () =>{
  return(
    <div>
      <p>Hello World</p>
    </div>
  )
}

/* render multiple components inside a component */
const App = () => {
  
  return(
    <div>
      <h1>Greeting</h1>
      {/* render the Hello component inside the App component */}
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App;
