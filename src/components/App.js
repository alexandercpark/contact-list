import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="heading">
          Contacts <button type="button">Add Contact</button>
        </div>
        <div className="contactList">
        <div className="contact">Albert Einstein <a href="#">edit</a> <a href="#">delete</a></div>
        <div className="contact">Neils Bohr <a href="#">edit</a> <a href="#">delete</a></div>
        <div className="contact">Ryan Gosling <a href="#">edit</a> <a href="#">delete</a></div>
        </div> 
      </div>
    );
  }
}

export default App;
