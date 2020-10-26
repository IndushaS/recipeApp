import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./LoginButton.css";
import headerImage from '../30-Minute-Instant-Pot-Butter-Chicken-7.jpg'
import logo from '../chefhat.png'

//Login button component
//If user is not logged in, it shows the login button
const LoginButton = () => {
const { loginWithRedirect, isAuthenticated } = useAuth0();

return ( 
!isAuthenticated && (
<>
<div class = "container">
<div ><img className="header" src={headerImage}/></div>
<div className="subheading">
<div ><img className="logo" src={logo}/></div>
<div className= "intro"><h1>Start cooking with PocketChef!</h1></div>
<button type="button"className="btn btn-warning btn-lg button" onClick={() => loginWithRedirect()}>
Explore Recipes
</button>
</div>
</div>
</>

)
)
}

export default LoginButton 