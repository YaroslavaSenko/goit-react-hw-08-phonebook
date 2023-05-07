import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
import { Form,
  FormLabel,
  FormInput,
  SubmitButton} from './ContactForm.styled';

import { addContacts,  } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';


export default function ContactForm() {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    // const contact = {
    //   id: nanoid(),
    //   name,
    //   number,
    // };
    if (
      contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    } else{
      dispatch(addContacts({name, number}));
    }
    event.target.reset();
  };


  return (
    <Form onSubmit={handleSubmit}>
    <h1>Phonebook</h1> 

      <FormLabel>
        <h3>Name</h3>
      
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        <h3>  Number</h3>      
    
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <br />

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
}
