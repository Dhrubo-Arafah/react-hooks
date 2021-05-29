import React, { useState, useEffect } from 'react'

const HookCounterOne = () => {
 const [count, setCount] = useState(0)
 useEffect(() => {
  document.title = `Clicked ${count} times`
  console.log("From useEffect()")
 })
 
 return (
  <div>
   <p>Using useEffect()</p>
   <button onClick={()=>setCount(count+1)}>
    Clicked {count} times
   </button>
  </div>
 )
}

export default HookCounterOne
