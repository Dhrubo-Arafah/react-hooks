import React, {useState} from 'react'

const HookCounterFour = () => {
 const initialState = [];

 const [item, setItem] = useState(initialState)

 const addItem = () => {
  setItem([...item,
  {
   value: Math.floor(Math.random() * 10) + 1,
   id: item.length
   }
  ])
 }
 
 return (
  <div>
   <button onClick={addItem}>Add a Number</button>
   <ul>
    {item.map(item => (
     <li key={item.id}>{ item.value}</li>
    ))}
   </ul>
  </div>
 )
}

export default HookCounterFour
