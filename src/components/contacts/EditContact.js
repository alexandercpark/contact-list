import React, {Component} from 'react'

import { Redirect } from 'react-router-dom'

class EditContact extends Component {
  constructor(props) {
    super();

    const id = parseInt(props.match.params.id, 10);

    this.state = {
      ...props.getContactById(id),
      contactUpdated: false
    }

    this.updateProperty = this.updateProperty.bind(this);
    this.updateContact = this.updateContact.bind(this);
  }

  updateProperty(event, field) {
    this.setState({
      [field]: event.target.value
    });
  }

  updateContact() {
    this.props.updateContact(this.state).then(() => {
      this.setState({
        contactUpdated: true
      })
    });
  }

  render() {
    if (this.state.contactUpdated === true) {
      return <Redirect to='/contacts' />
    }

      return (
      <div className="editContact-form">
        <form>
        <input value={this.state.name} type="text" placeholder="name" onChange={e => this.updateProperty(e, "name")}/>
          <input value={this.state.image_url} type="text" placeholder="image url" onChange={e => this.updateProperty(e, "image_url")}/>
          <input value={this.state.email} type="text" placeholder="email" onChange={e => this.updateProperty(e, "email")}/>
          <input value={this.state.phone_number} type="text" placeholder="phone number" onChange={e => this.updateProperty(e, "phone_number")}/>
          <button type="button" onClick={this.updateContact}>Update Contact</button>
        </form>
      </div>
    )
  }
}

export default EditContact;