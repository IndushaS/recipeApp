import React from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "./components/Nav";
import Recipe from "./components/Recipe";
import Profile from "./components/Profile";
import AddRecipe from "./components/addRecipe";
import EditRecipe from "./components/editRecipe";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <LoginButton />;

  //initialized react router for easy navigation within app and for adding/editing recipes
  if (isAuthenticated)
    return (
      <>
        <Router>
          <div className='header'>
            <Nav />
            <Route path='/profile' component={Profile} />
            <Route path='/addRecipe' component={AddRecipe} />
            <Route path='/home' component={Recipe} />
            <Route path='/editRecipe' component={EditRecipe} />
          </div>
        </Router>
      </>
    );
}

export default App;
