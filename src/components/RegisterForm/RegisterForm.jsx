import { useDispatch } from 'react-redux';
import {  signup } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import { Form,  Label} from './RegisterForm.styled'

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
      <Label>
        <span>Name:</span>
        <input id="name" name="name" type="text" />
      </Label>
      <Label>
        <span>Email:</span>
        <input id="email" name="email" type="email" />
      </Label>
      <Label>
        <span>Password:</span>
        <input id="password" name="password" type="password" />
      </Label>
      <button type="submit">Register</button>
    </Form>
  );
};