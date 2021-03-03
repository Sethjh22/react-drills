import React, {Component} from 'react'
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      filterString: '',
      list: ['Apple', 'Bananas', 'Carrots', 'Dog']
    }
  }
  handleChange(val){
    this.setState({filterString: val})
  }

  render(){
    let listDisplay = this.state.list
      .filter((e, i)=> {
        return e.includes(this.state.filterString)
      })
      .map((e, i)=>{
        return <h2 key={i}>{e}</h2>
      })
    return(     
      <div className='App'>
        <input onChange={(e)=> this.handleChange(e.target.value)}/>
        {listDisplay}
      </div>
    )
  }
}
export default App