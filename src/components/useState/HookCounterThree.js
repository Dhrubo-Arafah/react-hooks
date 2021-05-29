import React, {useState} from 'react'

const HookCounterThree = () => {
 const initialName = {
  firstName: '',
  lastName:'',
 }

 const [name, setName] = useState(initialName)

 return (
  <div>
   <h2>First Name: {name.firstName}</h2>
    <input type="text"
     onChange={event => setName({ ...name, firstName:event.target.value})}
   />
   <h2>Last Name: {name.lastName}</h2>
    <input type="text"
    onChange={event => setName({ ...name, lastName: event.target.value })}
    />

  </div>
 )
}

export default HookCounterThree
