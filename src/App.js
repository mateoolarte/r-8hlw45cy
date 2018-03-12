import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      info: false
    }
  }

  render() {
    return (
      <div className="wrapper">
        <label><input type="checkbox" checked={this.state.info} onChange={this.showInfo.bind(this)} /> Mostrar información importante</label>
        { this.state.info && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> }
      </div>
    );
  }

  showInfo(e) {
    this.setState({
      info: e.target.checked
    })
  }
}

export default App;
