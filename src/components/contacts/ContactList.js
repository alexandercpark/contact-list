import React, {Component} from 'react';
import Contact from './Contact.js'

class ContactList extends Component {
  constructor(props) {
    super();
  }

  render = () => (
    <div className="contactList">
      {
        this.props.contacts.map(contact => 
          <Contact key={contact.id} contact={contact} deleteContact={this.props.deleteContact}/>
        )
      }
    </div> 
  )

}

export default ContactList;