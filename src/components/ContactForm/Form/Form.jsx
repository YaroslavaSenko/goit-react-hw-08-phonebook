import { useState } from 'react';
import PropTypes from 'prop-types';
import {ContactForm, FormInput, SubmitButton, FormLabel} from './ContactForm.styled';

export const Form = ({ name = '', number = '', btnText, onSubmit }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);

  const formSubmitHandler = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    if (name === '' || number === '') {
      return alert('Fill all fields');
    }

    const contactToAdd = {
      name,
      number,
    };
    onSubmit(contactToAdd);

    setContactName('');
    setContactNumber('');
    form.reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setContactName(value);
        break;

      case 'number':
        setContactNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <ContactForm onSubmit={formSubmitHandler}>
      <FormLabel>
        <h3>Name</h3>
        
        <FormInput
          type="text"
          name="name"
          onChange={handleChange}
          value={contactName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <br />
      <FormLabel>
        <h3>Number</h3>        
        <FormInput
          type="tel"
          name="number"
          onChange={handleChange}
          value={contactNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
<br />
      <SubmitButton type="submit">{btnText}</SubmitButton>
    </ContactForm>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  btnText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
