import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import RestaurantForm from './RestaurantForm'
import './App.css';
export default function App() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <main style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Welcome!</h2>
            <button onClick={signOut} className='signout-button'>Sign Out</button>
          </div>
          <RestaurantForm />
        </main>
      )}
    </Authenticator>
  )
}
