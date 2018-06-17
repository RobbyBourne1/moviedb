import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text='Hi this is a prop'/>
        </header>
        <p className="App-intro">
          Robby <code>src/App.js</code> and save to reload.
        </p>
      </div>
    ); 
  }
}

class Welcome extends Component{
  render(){
    const { text } = this.props
    return(
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
