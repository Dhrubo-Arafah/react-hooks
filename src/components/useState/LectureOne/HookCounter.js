import React, { useState } from 'react'

const HookCounter = () => {
 const initialState = 0;
 const [state, setstate] = useState(initialState)
 return (
  <div>
   <p>Using useState Hooks</p>
   <h1>{ state}</h1>
   <button onClick={() => setstate(state + 1)}>
    Click to make {state+1}
   </button>
  </div>
 )
}

export default HookCounter
