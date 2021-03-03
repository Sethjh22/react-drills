import React, {Component} from 'react'
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      list: ['apples','Bananans', 'idk', 'Halo', 'Im happy']
    }
  }


  render(){
    let listDisplay = this.state.list.map((e, i)=> {
      return <h2 key={i}>{e}</h2>
    })
    return(
      <section className='App'>{listDisplay}</section>
    )
  }
}
export default App