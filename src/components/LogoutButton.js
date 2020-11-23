import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


//Logout button component 
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  //If user is logged in, they can logout using the onlcick log out button
  return (
    isAuthenticated && (
      <button type="button" className="btn btn-primary btn-lg" onClick={() => logout()}>
        Log Out
      </button>
    )
  )
}

export default LogoutButton
