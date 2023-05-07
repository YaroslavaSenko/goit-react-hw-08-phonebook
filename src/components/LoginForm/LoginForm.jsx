import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Form,  Label} from './LoginForm.styled'

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
      <Label>
        <span>Email:</span>
        <input id="email" name="email" type="email" />
      </Label>
      <Label>
        <span>Password:</span>
        <input id="password" name="password" type="password" />
      </Label>
      <button type="submit">Log in</button>
    </Form>
  );
};