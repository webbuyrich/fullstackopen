/*EVENT HANDLING REVISTED */

import { useState } from 'react'


const App = () =>{
    const [value, setValue] = useState(10)

    const handleClick = () => {
        console.log('clicked button')
        setValue(0)
    }

    return(
        <div>
            {value}
            <button onClick={handleClick}>reset to zero</button>
        </div>
    )
}

export default App