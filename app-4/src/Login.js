import React,{Component} from 'react'

class Login extends Component{

constructor(){
    super()
    this.state = {
        username: '',
        password: ''
    }
    this.showPassword = this.showPassword.bind(this)
}

handleUsername(name){
    this.setState({username: name})
}
handlePassword(pass){
    this.setState({password: pass})
}
showPassword(){
    alert `Username: ${this.state.username} Password: ${this.state.password}`
}

    render(){
        return(
            <section>
                <input onChange={e=> this.handleUsername(e.target.value)} type='text'/>
                <input onChange={e => this.handlePassword(e.target.value)} type='text'/>
                <button onClick={this.showPassword}>Login</button>
            </section>
        )
    }
}
export default Login