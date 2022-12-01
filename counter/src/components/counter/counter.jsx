import '../counter/Counter.css';
import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState((state) => ({
      count: ++state.count
    }))
  }

  decrementCount = () => {
    this.setState((state) => ({
      count: --state.count
    }))
  }

  getCount = (e) => {
    this.setState((state) => ({
      count: e.target.value
    }))
  }

  render() {
    return (
        <div className="Counter">
          <div className="Count">
              <span>{this.state.count}</span>
          </div>
          <div className="Buttons">
            <input type="button" value="+" onClick={this.incrementCount}/>
            <input type="button" value="-" onClick={this.decrementCount}/>
          </div>
          <input className='input-count' type="text" onChange={this.getCount} placeholder="Начальное значение"/>
        </div>
    );
  }
}