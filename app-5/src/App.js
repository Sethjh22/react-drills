import React,{Component} from 'react'
import './App.css'
import Image from './Image'

class App extends Component{



  render(){
    return(
      <div className='App'>
        <Image url={'https://c4.wallpaperflare.com/wallpaper/757/525/281/rick-and-morty-tv-mozilla-firefox-rick-sanchez-wallpaper-preview.jpg'}/>
      </div>
    )
  }
}
export default App