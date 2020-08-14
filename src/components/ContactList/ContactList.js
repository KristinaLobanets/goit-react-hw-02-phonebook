import React from "react";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} -{contact.number}
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Contacts;
