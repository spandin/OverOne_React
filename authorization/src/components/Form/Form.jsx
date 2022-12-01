import './style.css'
import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: '',
            disabled: true
        }
    }
    
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {login, password} = this.state
        return (
            <form>
                <p>Login: {login} Password: {password}</p>
                <input type="text" name="login" onChange={this.onValueChange} />
                <input type="password" name="password" onChange={this.onValueChange} />
                <input type="submit" value="Login" disabled={this.state.disabled} />
            </form>
        )
    }
}