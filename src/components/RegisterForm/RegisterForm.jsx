import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/authOperations';
import { Form, FormInput, FormLabel, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (error) {
      alert('User name or email already used');
    }

    dispatch(
      signup({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <FormLabel>
        <span>Name:</span>
        <br />
        <FormInput id="name" name="name" type="text" />
      </FormLabel>
     
      <FormLabel>
        <span>Email:</span>
        <br />
        <FormInput id="email" name="email" type="email" />
      </FormLabel>
      
      <FormLabel>
        <span>Password:</span>
        <br />
        <FormInput id="password" name="password" type="password" />
      </FormLabel>
      

      <Button type="submit">Register</Button>
    </Form>
  );
};
