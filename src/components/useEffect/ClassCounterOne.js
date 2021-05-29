import React, { Component } from 'react'

export class ClassCounterOne extends Component {
 constructor(props) {
  super(props)
  this.state = {
   count:0
  }
 }

 componentDidMount() {
  console.log("I'm componentDidMount()")
 document.title=`Clicked ${this.state.count} times`
 }
 
 componentDidUpdate(prevProps, prevState) {
  console.log("I'm componentDidUpdate()")
  document.title = `Clicked ${this.state.count} times`
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
    <button onClick={this.CountHandler}>
     Clicked :{this.state.count} times
     </button>
   </div>
  )
 }
}

export default ClassCounterOne
