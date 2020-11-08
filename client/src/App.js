import React from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Recipe from "./components/Recipe";
import { useAuth0 } from "@auth0/auth0-react";
import AddRecipe from "./components/addRecipe";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Recommendations from "./components/Recommendation";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  //initialized react router for easy navigation within app and for adding/editing recipes
  return (
    <>
      <LoginButton />
      <LogoutButton />

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/recommendation">Recommendation</Link>
              </li>
              <li>
                <Link to="/addRecipe">Add Recipe</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/recommendation">
              <Recommendations />
            </Route>
            <Route path="/addRecipe">
              <AddRecipe />
            </Route>
            <Route path="/home">
              <Recipe />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
