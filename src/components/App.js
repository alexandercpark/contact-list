import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList';
import NavBar from './NavBar.js'
import AddContact from './AddContact.js'

import { Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();

    this.state = {
      "contacts": [
        {
          "id": 70219577,
          "name": "Albert Einstein",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
          "email": "aeinstein@example.com",
          "phone_number": "15555555555"
        },
        {
          "id": 75827592,
          "name": "Neils Bohr",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/440px-Niels_Bohr.jpg",
          "email": "nbohr@example.com",
          "phone_number": "14444444444"
        },        {
          "id": 23416723,
          "name": "Ryan Gosling",
          "image_url": "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_SY1000_CR0,0,790,1000_AL_.jpg",
          "email": "rgosling@example.com",
          "phone_number": "18888888888"
        },
      ]
    }

  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/contacts' render={() => 
            <ContactList contacts={this.state.contacts}/>
          }/>
          <Route path='/add' render={() => 
            <AddContact/>
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
