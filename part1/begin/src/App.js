/* USING MUTLIPLE STATES */
import { useState } from "react";

const History = (props) =>{
  if(props.allClicks.length === 0){
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {  
  
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  /* Create allClicks array to remember every click */
  const [allClicks, setAll] = useState([])

  /* create new object using ... then set the left and right click property values */

  /* refactored event handlers to use setClicks object updates*/
  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 })
    setAll(allClicks.concat('L'))
  }
    
  

  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 })
    setAll(allClicks.concat('R'))
  }
    
  

  return(
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <History allClicks={allClicks}/>
    </div>
  )
  
}

export default App;
