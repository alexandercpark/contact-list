import React, {Component} from 'react';

class ContactList extends Component {
  constructor(props) {
    super();

    console.log('my contacts', props.contacts);
  }

  render = () => (
    <div className="contactList">
    {
      this.props.contacts.map( (contact, index) => (
        <div className="contact">
          <img src={contact.image_url} style={{height: 100}} />
          {contact.name}
          <a href={"mailto:" + contact.email}>email</a>
          <a href={"tel:"+ contact.phone_number}>call</a>
          <a href="#">edit</a> <a href="#">delete</a>
        </div>
      ))
    }
    </div> 
  )

}

export default ContactList;