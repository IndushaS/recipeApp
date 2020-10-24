import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button type = "button" className="btn btn-primary btn-lg"onClick={() => logout()}>
        Log Out
      </button>
    )
  )
}

export default LogoutButton
