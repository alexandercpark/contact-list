import React, {Component} from 'react';

class ContactForm extends Component {
  constructor(props) {
    super();

    this.state = {
      id: props.id || Math.round(Math.random() * 100000000),
      name: props.name || '',
      image_url: props.image_url || '',
      email: props.email || '',
      phone_number: props.phone_number || '',
    };

    this.updateProperty = this.updateProperty.bind(this);
  }

  updateProperty(event, field) {
    this.setState({
      [field]: event.target.value
    },
    () => this.props.onChange(this.state));
  }

  render = () => {
    return (
      <div className="ContactForm">
          <input value={this.state.name} type="text" placeholder="name" onChange={e => this.updateProperty(e, "name")}/>
          <input value={this.state.image_url} type="text" placeholder="image url" onChange={e => this.updateProperty(e, "image_url")}/>
          <input value={this.state.email} type="text" placeholder="email" onChange={e => this.updateProperty(e, "email")}/>
          <input value={this.state.phone_number} type="text" placeholder="phone number" onChange={e => this.updateProperty(e, "phone_number")}/>
      </div>
    )
  }
}

export default ContactForm;