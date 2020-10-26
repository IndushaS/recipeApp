import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
//Login button component

//If user is not logged in, it shows the login button
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      //on click button that takes to login page
      <button type="button" className="btn btn-primary btn-lg" onClick={() => loginWithRedirect()}>
        Explore Recipes!
      </button>
    )
    
  )
}

export default LoginButton
