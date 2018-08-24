import React from 'react';

const AddContact = (props) => {
  return (
    <div className="addContact-form">
      <form>
        <input id="addContactName" type="text" placeholder="name"/>
        <input id="addContactImageUrl" type="text" placeholder="image url" />
        <input id="addContactEmail" type="text" placeholder="email"/>
        <input id="addContactPhoneNumber" type="text" placeholder="phone number"/>
        <button id="addContactSubmitButton" type="button">Add Contact</button>
      </form>
    </div>
  )
}

export default AddContact;