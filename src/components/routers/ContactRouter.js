import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import ContactList from '../contacts/ContactList';
import AddContact from '../contacts/AddContact';
import EditContact from '../contacts/EditContact';


class ContactRouter extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Switch>
        <Route exact path='/contacts' render={() => 
          <ContactList contacts={this.props.contacts} deleteContact={this.props.deleteContact}/>
        }/>
        <Route path='/contacts/new' render={() => 
          <AddContact addContact={this.props.addContact}/>
        }/>
        <Route path='/contacts/edit/:id' render={(props) =>
          <EditContact getContactById={this.props.getContactById} updateContact={this.props.updateContact} match={props.match}/>
        }/>
      </Switch>
    </div>
      )
  }
}

export default ContactRouter;