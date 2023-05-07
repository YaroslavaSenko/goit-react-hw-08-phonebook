import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import {Header,AuthArea } from './AppBar.styled';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {<h2>Phonebook</h2>}
      <AuthArea>{isLoggedIn ? <UserMenu /> : <AuthNav />}</AuthArea>
    </Header>
  );
};