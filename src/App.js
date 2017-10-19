import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { color: 'gray'};
    }

    onClick = () => {
        const color = this.state.color === 'gray' ? 'violet' : 'gray';
        this.setState({ color });
    }

  render() {
    return (
      <div className={"App " + this.state.color}>
        <button onClick={this.onClick}>push me!</button>
      </div>
    );
  }
}

export default App;
