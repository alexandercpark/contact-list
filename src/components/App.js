import React, { Component } from 'react';
import '../css/App.css';
import NavBar from './NavBar.js';
import GoogleApi from './apis/GoogleApi';
import ContactRouter from './routers/ContactRouter';

import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
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

    GoogleApi.handleClientLoad();

    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.getContactById = this.getContactById.bind(this);
    this.updateContact = this.updateContact.bind(this);
    this.loadContactsFromGoogle = this.loadContactsFromGoogle.bind(this);
  }

  addContact(contact) {
    return new Promise((resolve) => {
      this.setState({
        contacts: this.state.contacts.concat(contact)
      },
      resolve)}
    );
  }

  deleteContact(id) {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    });
  }

  getContactById(id) {
    return this.state.contacts.find(contact => contact.id === id);
  }

  updateContact(updatedContact) {
    return new Promise((resolve) => {
    this.setState({
      contacts: this.state.contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact)
    },
    resolve)}
    );
  }

  loadContactsFromGoogle() {
    GoogleApi.handleSignInClick();

    setTimeout(() => {
      this.setState({
        contacts: GoogleApi.loadedContactsFromGoogle
      });
    }, (7000));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
        <Route exact path='/' render={() => 
            <Redirect to='/contacts' />
            }/>
          <Route path='/contacts' render={(props) =>
            <ContactRouter contacts={this.state.contacts} deleteContact={this.deleteContact} addContact={this.addContact} getContactById={this.getContactById} updateContact={this.updateContact} loadContactsFromGoogle={this.loadContactsFromGoogle} props={props}/>
            }/>
        </Switch>
      </div>
    );
  }
}

export default App;