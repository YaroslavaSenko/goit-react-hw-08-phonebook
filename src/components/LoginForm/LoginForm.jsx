import * as React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Form, FormLabel, FormInput, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (error) {
      alert('No such user');
    }

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <FormLabel>
        <h3>Email:</h3>
        
        <FormInput id="email" name="email" type="email" />
        <br />
      </FormLabel>
      <FormLabel>
        <h3>Password:</h3>
       
        <FormInput id="password" name="password" type="password" />
        <br />
      </FormLabel>
      <br />
      <Button type="submit">Log in</Button>
    </Form>
  );
};
