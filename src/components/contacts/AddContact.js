import React, {Component} from 'react';

import { Redirect } from 'react-router-dom'

class AddContact extends Component {
  constructor(props) {
    super();

    this.state = {
      id: 0,
      name: '',
      image_url: '',
      email: '',
      phone_number: '',
      contactAdded: false
    };

    this.updateProperty = this.updateProperty.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  generateId() {
    return Math.round(Math.random() * 100000000);
  };

  updateProperty(event, field) {
    this.setState({
      [field]: event.target.value
    });
  }

  addContact() {
    var callback = () => this.props.addContact(this.state).then(this.setState({
        contactAdded: true
      })
    );

    this.setState({
        id: this.generateId()
      },
      () => callback()
    );
  }

  render = () => {
    if (this.state.contactAdded === true) {
      return <Redirect to='/contacts' />
    }

    return (
      <div className="addContact-form">
        <form>
          <input value={this.state.name} type="text" placeholder="name" onChange={e => this.updateProperty(e, "name")}/>
          <input value={this.state.image_url} type="text" placeholder="image url" onChange={e => this.updateProperty(e, "image_url")}/>
          <input value={this.state.email} type="text" placeholder="email" onChange={e => this.updateProperty(e, "email")}/>
          <input value={this.state.phone_number} type="text" placeholder="phone number" onChange={e => this.updateProperty(e, "phone_number")}/>
          <button type="button" onClick={this.addContact}>Add Contact</button>
        </form>
      </div>
    )
  }
}

export default AddContact;