import './App.css';
import React from 'react';

export default class App extends React.Component {
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
  render() {
    return (
      <div className="App">
        <div className="Counter">
          <div className="Count">
              <span>{this.state.count}</span>
          </div>
          <div className="Buttons">
            <input type="button" value="+" onClick={this.incrementCount}/>
            <input type="button" value="-" onClick={this.decrementCount}/>
          </div>
        </div>
      </div>
    );
  }
}