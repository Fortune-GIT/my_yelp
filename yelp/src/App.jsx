import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import RestaurantForm from './RestaurantForm';

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <button onClick={signOut}>Sign Out</button>
          <h2>Welcome, {user.username}!</h2>
          <RestaurantForm />
        </main>
      )}
    </Authenticator>
  );
}
