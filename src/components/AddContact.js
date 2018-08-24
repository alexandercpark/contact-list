import React, {Component} from 'react';

class AddContact extends Component {
  constructor(props) {
    super();

    this.state = {
      id: 0,
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
    };
  }

  generateId = () => Math.round(Math.random() * 100000000);

  updateContactName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateContactImageUrl(event) {
    this.setState({
      image_url: event.target.value
    });
  }

  updateContactEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  updateContactPhoneNumber(event) {
    this.setState({
      phone_number: event.target.value
    });
  }

  addContactButtonClick(event) {
    const generatedId = this.generateId();

    this.setState({
      id: generatedId
    });
  }

  render = () => (
    <div className="addContact-form">
      <form>
        <input value={this.state.name} type="text" placeholder="name" onChange={event => this.updateContactName(event)}/>
        <input value={this.state.image_url} type="text" placeholder="image url" onChange={event => this.updateContactImageUrl(event)}/>
        <input value={this.state.email} type="text" placeholder="email" onChange={event => this.updateContactEmail(event)}/>
        <input value={this.state.phone_number} type="text" placeholder="phone number" onChange={event => this.updateContactPhoneNumber(event)}/>
        <button type="button" onClick={event => this.addContactButtonClick(event)}>Add Contact</button>
      </form>
    </div>
  )
}

export default AddContact;