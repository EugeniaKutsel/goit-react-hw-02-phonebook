import React from "react";
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>{contacts.map(({id, name, number}) =>
      <li key={id}>
        <p>{name}: <span>{number}</span></p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
      )}</ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;