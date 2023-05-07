
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper,  Username} from './UserMenu.styled'

import React from 'react';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}!</Username>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </Wrapper>
  );
};