import React, {Component} from 'react';
import Contact from './Contact.js'

class ContactList extends Component {
  constructor(props) {
    super();
  }

  render = () => (
      <div className="contactList">
      <div className="heading">
        Contacts <button type="button">Add Contact</button>
      </div>
      {
        this.props.contacts.map( contact => 
          <Contact key={contact.id} contact={contact}/>
        )
      }
    </div> 
  )

}

export default ContactList;