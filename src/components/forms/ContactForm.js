import React, {Component} from 'react';

class ContactForm extends Component {
  constructor(props) {
    super();

    this.state = {
      contact: {
        id: props.id || Math.round(Math.random() * 100000000),
        name: props.name || '',
        image_url: props.image_url || '',
        email: props.email || '',
        phone_number: props.phone_number || '',
      },
      isValid: true
    };

    this.updateProperty = this.updateProperty.bind(this);
  }

  updateProperty(event, field) {
    let contact = this.state.contact;
    contact[field] = event.target.value;

    this.setState({
      contact: contact,
      isValid: this.isEmailValid() && this.isPhoneNumberValid()
    },
    () => this.props.onChange(this.state));
  }

  isEmailValid() {
    let email = this.state.contact.email;

    //if the email is blank, undefinded, or null
    //we assume that the input field is empty
    if(!email) {
      return true;
    }

    //https://stackoverflow.com/a/46181
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  isPhoneNumberValid() {
    let phoneNumber = this.state.contact.phone_number;

    //if the phone number is blank, undefinded, or null
    //we assume that the input field is empty
    if(!phoneNumber) {
      return true;
    }

    //https://stackoverflow.com/a/16702965
    var re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    return re.test(String(phoneNumber).toLowerCase());
  }
  render = () => {
    let emailError;
    let phoneNumberError;

    if(!this.isEmailValid()) {
      emailError = <div className="error">INVALID EMAIL</div>
    }
    if(!this.isPhoneNumberValid()) {
      phoneNumberError = <div className="error">INVALID PHONE NUMBER</div>
    }

    return (
      <div className="ContactForm">
          <input value={this.state.contact.name} type="text" placeholder="name" onChange={e => this.updateProperty(e, "name")}/>
          <input value={this.state.contact.image_url} type="text" placeholder="image url" onChange={e => this.updateProperty(e, "image_url")}/>
          {emailError}
          <input value={this.state.contact.email} type="text" placeholder="email" onChange={e => this.updateProperty(e, "email")}/>
          {phoneNumberError}
          <input value={this.state.contact.phone_number} type="text" placeholder="phone number" onChange={e => this.updateProperty(e, "phone_number")}/>
      </div>
    )
  }
}

export default ContactForm;