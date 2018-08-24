import React from 'react';

const Contact = (props) => {

  const contact = props.contact;

  return (
    <div className="contact">
      <img src={contact.image_url} style={{height: 100}} />
      {contact.name}
      <a href={"mailto:" + contact.email}>email</a>
      <a href={"tel:"+ contact.phone_number}>call</a>
      <a href="#">edit</a> <a href="#">delete</a>
    </div>
  )
}

export default Contact;