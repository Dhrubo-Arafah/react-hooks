import React, { useState, useEffect } from 'react'

const HookCounterOne = () => {
 const [count, setCount] = useState(0)
 const [name, setName] = useState('')
 
 useEffect(() => {
  document.title = `Clicked ${count} times`
  console.log("From useEffect()")
 }, [count])

 return (
  <div>
   <p>Using useEffect()</p>
   <input type="text"
    value={name}
    onChange={e => setName(e.target.value)} />
   
   <button onClick={()=>setCount(count+1)}>
    Clicked {count} times
   </button>
  </div>
 )
}

export default HookCounterOne
