import React from 'react';
import { Link } from 'react-router-dom'


const Contact = (props) => {

  const contact = props.contact;

  const deleteContact = () => {
    props.deleteContact(contact.id);
  }

  return (
    <div className="contact">
      <img src={contact.image_url} style={{height: 100}} />
      <div className="contact-name">{contact.name}</div>
      <a href={"mailto:" + contact.email}>email</a>
      <a href={"tel:"+ contact.phone_number}>call</a>
      <Link to={"/contacts/edit/" + contact.id}>edit</Link>
      <button onClick={deleteContact}>delete</button>
    </div>
  )
}

export default Contact;