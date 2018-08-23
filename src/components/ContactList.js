import React, {Component} from 'react';

class ContactList extends Component {

  render = () => (
    <div className="contactList">
      <div className="contact">Albert Einstein <a href="#">edit</a> <a href="#">delete</a></div>
      <div className="contact">Neils Bohr <a href="#">edit</a> <a href="#">delete</a></div>
      <div className="contact">Ryan Gosling <a href="#">edit</a> <a href="#">delete</a></div>
    </div> 
  )

}

export default ContactList;