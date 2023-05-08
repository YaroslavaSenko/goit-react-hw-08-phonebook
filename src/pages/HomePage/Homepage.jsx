
import { HomepageContainer } from './Homepage.styled';
import { useAuth } from 'hooks/useAuth';

const HomePage = () => {
 
  const { user } = useAuth();
  return (
    <HomepageContainer>
      <div>
      <h1>Welcome, {user.name}!</h1>
      </div>
    </HomepageContainer>
  );
};

export default HomePage;


