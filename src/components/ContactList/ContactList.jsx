import React from 'react';
import { useSelector } from 'react-redux';
// import { Contacts } from './ContactsList.styled';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { getContacts, getFilter } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return contacts.length === 0 ? (
    `No contacts yet`
  ) : visibleContacts.length === 0 ? (
    `No matches founded`
  ) : ( <div>  
    <h2>Contacts</h2>
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
    </div>
  );
};

export default ContactsList;