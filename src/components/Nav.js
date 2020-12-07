import React from "react";
import Profile from "./Profile";
import Recipe from "./Recipe";
import AddRecipe from "./addRecipe";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./nav.css";

function Nav() {
    const { logout, isAuthenticated } = useAuth0();

    //initialized react router for easy navigation within app and for adding/editing recipes
    //This navigation componenet will represent all the functionality needed for switching pages
    return (
        <nav>
            <ul className='nav-links'>
            <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/addRecipe'>Add Recipe</Link>
                </li>
                <li>
                    <Link to='/recommendation'>Recommendations</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                {/* <li onClick={() => logout()}>
          <a>Log Out</a>
        </li> */}
            </ul>
        </nav>
    );
}

export default Nav;