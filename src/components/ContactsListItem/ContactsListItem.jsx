import React from 'react';
import { Contact, DeleteBtn } from './ContactsListItem.styled';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContacts } from 'redux/operations';

export const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <Contact>
      {name}: {number}
      <DeleteBtn
        type="button"
        id={id}
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </DeleteBtn>
    </Contact>
  );
};