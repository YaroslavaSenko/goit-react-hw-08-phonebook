import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Container, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <p>Welcome, {user.name}!</p>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </Container>
  );
};
