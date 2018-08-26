import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

import ContactForm from '../forms/ContactForm.js';

class AddContact extends Component {
  constructor(props) {
    super();

    this.state = {
      contact: {},
      contactAdded: false,
    };

    this.addContact = this.addContact.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  addContact() {
    var callback = () => this.props.addContact(this.state.contact).then(this.setState({
        contactAdded: true
      })
    );
    this.setState({
        contact: this.state.contact
      },
      () => callback()
    );
  }

  onChange(contactState) {
    this.setState({
      contact: contactState
    });
  }

  render = () => {
    if (this.state.contactAdded === true) {
      return <Redirect to='/contacts' />
    }

    return (
      <div className="addContact-form">
        <form>
          <ContactForm onChange={this.onChange}/>
          <button type="button" onClick={this.addContact}>Add Contact</button>
        </form>
      </div>
    )
  }
}

export default AddContact;