import React, {Component} from 'react';
import Contact from './Contact.js'

class ContactList extends Component {
  constructor(props) {
    super();
  }

  render = () => (
    <div className="contactList">
      {
        this.props.contacts.map(contact => (
            <span className="contact-container" key={contact.id}>
              <Contact contact={contact} deleteContact={this.props.deleteContact}/>
            </span>
          )
        )
      }
      <button className="btn btn-primary" onClick={this.props.loadContactsFromGoogle}>Load contacts from Google</button>
    </div>
  )

}

export default ContactList;