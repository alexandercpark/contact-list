import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

import ContactForm from '../forms/ContactForm.js';

class EditContact extends Component {
  constructor(props) {
    super();

    const id = parseInt(props.match.params.id, 10);

    this.state = {
      contact: {
        ...props.getContactById(id)
      },
      isValid: true,
      contactUpdated: false
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

      return (
      <div className="editContact-form">
        <form>
          <ContactForm onChange={this.onChange} {...this.state.contact}/>
          <button type="button" disabled={!this.state.isValid} onClick={this.updateContact}>Update Contact</button>
        </form>
      </div>
    )
  }
}

export default EditContact;