import './style.scss'
import React from 'react'
import { useState } from 'react'

function Form() {
    const [state, setState] = useState()

    function getData(e) {
        setState({
            [e.target.name]: e.target.value,
        })
    }

    console.log(`state`, state);
    return(
        <form className='authform'>
            <input type="text" name="login" onChange={getData} placeholder='Enter login'/>
            <input type="password" name="password" onChange={getData} placeholder='Enter password'/>
            <input type="submit" value="Login" disabled />
        </form>
    )
}

export default Form