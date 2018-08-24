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

    this.updateContactName = this.updateContactName.bind(this);
    this.updateContactImageUrl = this.updateContactImageUrl.bind(this);
    this.updateContactEmail = this.updateContactEmail.bind(this);
    this.updateContactPhoneNumber = this.updateContactPhoneNumber.bind(this);
    this.addContactButtonClick = this.addContactButtonClick.bind(this);
  }

  generateId() {
    return Math.round(Math.random() * 100000000);
  };

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
    this.setState({
      id: this.generateId()
    },
    this.props.addContact(this.state));
  }

  render = () => (
    <div className="addContact-form">
      <form>
        <input value={this.state.name} type="text" placeholder="name" onChange={this.updateContactName}/>
        <input value={this.state.image_url} type="text" placeholder="image url" onChange={this.updateContactImageUrl}/>
        <input value={this.state.email} type="text" placeholder="email" onChange={this.updateContactEmail}/>
        <input value={this.state.phone_number} type="text" placeholder="phone number" onChange={this.updateContactPhoneNumber}/>
        <button type="button" onClick={this.addContactButtonClick}>Add Contact</button>
      </form>
    </div>
  )
}

export default AddContact;