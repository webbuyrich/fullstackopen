/* USING MUTLIPLE STATES */
import { useState } from "react";



const App = () => {  
  
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  /* create new object using ... then set the left and right click property values */

  /* refactored event handlers to use setClicks object updates*/
  const handleLeftClick = () => 
    setClicks({ ...clicks, left: clicks.left + 1 })
  

  const handleRightClick = () => 
    setClicks({ ...clicks, right: clicks.right + 1 })
  

  return(
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
  
}

export default App;
