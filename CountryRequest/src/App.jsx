import React from 'react';
import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      country: {
        name: '',
        capital: '',
        flag: ''
      }
    }
  }

  getCountryName = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    fetch(`https://restcountries.com/v3.1/name/${this.state.name}`)
    .then(res => {
      if(!res.ok) {
        throw Error('Ошибка фетча')
      }
      return res.json()
    })
    .then((data) => {
      this.setState({
        country: {
          name: data[0].name.common,
          capital: data[0].capital[0],
          flag: data[0].flags.png
        }
      })
    })
    .catch(e => e)
  }

  render() {
    const country = this.state.country.flag ? 
    <View flag={this.state.country.flag} 
          name={this.state.country.name} 
          capital={this.state.country.capital}/> : null
    return (
      <div className='App'>
        <input type="text" name="name" onChange={this.getCountryName} placeholder='Enter country name'/>
        {country}
      </div>
    )
  }
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

// render() {
//   const comments = this.state.comment ? <View comment={this.state.comment}/> : null
//   return comments
// }
// }

// const View = ({comment}) => {
// return (
//   <span>{comment}</span>
// )
// }