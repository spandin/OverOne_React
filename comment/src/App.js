import React from 'react';
import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: ''
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(res => {
      if(!res.ok) {
        throw Error('Ошибка фетча')
      }
      return res.json()
    })
    .then((data) => {
      this.setState({
        comment: data.map((key, ind) => {
          return ind + 1 + key.name
        })
      })
    })
    .catch(e => e)
  }

  render() {
    const comm = this.state.comment
    console.log(comm);
    return (
      <div className='App'>
        <span>{comm}</span>
      </div>
    )
  }
}
