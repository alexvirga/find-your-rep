import React, { Component } from 'react';
import './App.css';
import Search from "./Components.js/Search"



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header-title">
          Find your Congressional Representative
          </h1>
        </header>
       <Search /> 
      </div>
    );
  }
}







export default App;
