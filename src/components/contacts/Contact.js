import React from 'react';
import { Link } from 'react-router-dom'

import '../../css/Contact.css'

const Contact = (props) => {

  const contact = props.contact;

  const deleteContact = () => {
    if (window.confirm('Are you sure you want to delete ' + contact.name + '?')) {
      props.deleteContact(contact.id);
    }
  }

  return (
    <div className="contact">
      <img alt={contact.name} src={contact.image_url} style={{height: 100}} />
      <div className="contact-name"><em>{contact.name}</em></div>

      
      <a className="contact-form-action" href={"mailto:" + contact.email}>email</a> 
      <a className="contact-form-action" href={"tel:"+ contact.phone_number}>call</a>
      <Link className="contact-form-action" to={"/contacts/edit/" + contact.id}>edit</Link>
      <button className="btn btn-danger contact-form-action" onClick={deleteContact}>delete</button>
    </div>
  )
}

export default Contact;