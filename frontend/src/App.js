import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/stylesheets/App.scss';

class App extends Component {

  getUserData(){
    return fetch(`http://localhost:5000/users.json`)
      .then(res => {
        console.log(res)
      })
  }
  componentDidMount() {
    this.getUserData()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="btn">Hello</div>
      </div>
    );
  }
}

export default App;
