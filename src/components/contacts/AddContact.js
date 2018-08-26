import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

import ContactForm from '../forms/ContactForm.js';

class AddContact extends Component {
  constructor(props) {
    super();

    this.state = {
      contact: {},
      contactAdded: false,
      isValid: true
    };

    this.addContact = this.addContact.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  addContact() {
    this.props.addContact(this.state.contact).then(this.setState({
        contactAdded: true
      })
    );
  }

  onChange(formData) {
    this.setState({
      ...formData
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
          <button type="button" disabled={!this.state.isValid} onClick={this.addContact}>Add Contact</button>
        </form>
      </div>
    )
  }
}

export default AddContact;