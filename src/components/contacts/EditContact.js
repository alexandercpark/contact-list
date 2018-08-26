import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

import ContactForm from '../forms/ContactForm.js';

class EditContact extends Component {
  constructor(props) {
    super();

    const id = parseInt(props.match.params.id, 10);
    const contact = props.getContactById(id);

    this.state = {
      contact: {
        ...contact
      },
      isValid: true,
      contactUpdated: false,
      foundContact: contact !== undefined
    }

    this.updateContact = this.updateContact.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  updateContact() {
    this.props.updateContact(this.state.contact).then(() => {
      this.setState({
        contactUpdated: true
      })
    });
  }

  onChange(formData) {
    this.setState({
      ...formData
    });
  }

  render() {
    if (this.state.contactUpdated === true) {
      return <Redirect to='/contacts' />
    }

    if(!this.state.foundContact) {
      return <div>No contact with id {this.props.match.params.id} found</div>
    }

      return (
      <div className="editContact-form">
        <form>
          <ContactForm onChange={this.onChange} {...this.state.contact}/>
          <button className="btn btn-primary" type="button" disabled={!this.state.isValid} onClick={this.updateContact}>Update Contact</button>
        </form>
      </div>
    )
  }
}

export default EditContact;