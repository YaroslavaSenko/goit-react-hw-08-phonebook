import React from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import { Contact, DeleteBtn } from './ContactsListItem.styled';

export const ContactsListItem = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <Contact>
      {name}: {number}
      <DeleteBtn type="button" id={id} onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </Contact>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
