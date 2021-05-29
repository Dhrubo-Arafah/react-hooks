import React, {useState} from 'react'

const HookCounterTwo = () => {
 const initialCount = 0
 const [count, setCount] = useState(initialCount);
 return (
  <div>
   <h1>Count: {count}</h1>
   {/* <button onClick={()=>setCount(count+1)}>Increment</button>
   <button onClick={()=>setCount(initialCount)}>Reset</button>
   <button onClick={()=>setCount(count===0?count:count-1)}>Decrement</button> */}
   <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
   <button onClick={() => setCount(initialCount)}>Reset</button>
   <button onClick={() => setCount(prevCount => prevCount <= 0 ? prevCount : prevCount - 1)}>Decrement</button>
  </div>
 )
}

export default HookCounterTwo
