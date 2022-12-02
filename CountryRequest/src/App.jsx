import React, { useState, useEffect } from 'react';
import './App.scss';

export default function App() {

  let [state, setState] = useState({getName: ''})
  
  function getName(e) {
      setState({
        [e.target.name]: e.target.value,
      })
  }

  console.log(`state`, state);

useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${state.getName}`)
    .then(res => {
      if(!res.ok) {
        throw Error('Ошибка фетча')
      }
      return res.json()
    })
    .then((data) => {
      setState({
          name: data[0].name.common,
          capital: data[0].capital[0],
          flag: data[0].flags.png
      })
    })
    .catch(e => e)
}, [state.getName])

    const country = state.flag ? 
    <View flag={state.flag} 
          name={state.name} 
          capital={state.capital}/> : null

  return(
    <div className='App'>
      <input type="text" name="getName" onChange={getName} placeholder='Enter country name'/>
      {country}
    </div>
  )
}

const View = ({flag, name, capital}) => {
  return (
    <div className='Card'>
      <img src={flag} alt="" />
      <span>Name:{name}</span>
      <span>Capital:{capital}</span>
    </div>
  ) 
}