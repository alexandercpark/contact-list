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
            <div className="contact-container" key={contact.id}>
              <Contact contact={contact} deleteContact={this.props.deleteContact}/>
            </div>
          )
        )
      }
    </div> 
  )

}

export default ContactList;