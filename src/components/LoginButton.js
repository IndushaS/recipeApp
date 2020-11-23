
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./loginbutton.css";
import headerImage from '../assets/30-Minute-Instant-Pot-Butter-Chicken-7.jpg'
import logo from '../assets/chefhat.png'
//import the images needed for this page

//Login button component
//If user is not logged in, it shows the login button
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      //creates a div component for each section of the page 
      //includes a container to group all sections of the page
      //header is the main picture on the left of the page 
      //subheading is the right half of the page 
      //logo is the chef's hat image 
      //intro is the value proposition under the hat 
      //button will take user to the log in/sign up pages
      <>
        <div class="container">

          <div className="subheading">
            <div ><img className="logo" src={logo} /></div>
            <div className="intro"><h1>Start cooking with PocketChef!</h1></div>
            <button type="button" className="btn btn-warning btn-lg button" onClick={() => loginWithRedirect()}>
              Explore Recipes
</button>
          </div>
        </div>
      </>

    )
  )
}

export default LoginButton 
