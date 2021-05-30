import React, { Component } from 'react'

export class ClassCounterOne extends Component {
 constructor(props) {
  super(props)
  this.state = {
   count: 0,
   msg:''
  }
 }

 componentDidMount() {
  console.log("I'm componentDidMount()")
 document.title=`Clicked ${this.state.count} times`
 }
 
 componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
   console.log("I'm componentDidUpdate()")
   document.title = `Clicked ${this.state.count} times`
  }
 }

 CountHandler = () => {
  this.setState({
   count: this.state.count + 1,
  })
 }

 render() {
  return (
   <div>
    <p>Using Class Component</p>
    <input type="text"
     value={this.state.name}
     onChange={(e) => {
     this.setState({msg:e.target.value})
     }} />
    
    <button onClick={this.CountHandler}>
     Clicked :{this.state.count} times
     </button>
   </div>
  )
 }
}

export default ClassCounterOne
