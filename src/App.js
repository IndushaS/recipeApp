import React from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import About from "./components/about";
import Profile from "./components/Profile";
import Recipe from "./components/Recipe";
import Recommendation from "./components/Recommendation";
import { useAuth0 } from "@auth0/auth0-react";
import AddRecipe from "./components/addRecipe";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import recipeReducer from "./store/reducers/recipeReducers";
import ReduxThunk from "redux-thunk";

const store = createStore(recipeReducer, applyMiddleware(ReduxThunk));

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  // if (!isAuthenticated) return <LoginButton />;

  // //initialized react router for easy navigation within app and for adding/editing recipes
  // //Use is Authenticated to only show critical data when a user is signed in
  // if (isAuthenticated)
  return (
    <>
<<<<<<< HEAD
      <Router>
        <div>
          <Nav />
          <Route path='/about' component={About} />
          <Route path='/profile' component={Profile} />
          <Route path='/addRecipe' component={AddRecipe} />
          <Route path='/home' component={Recipe} />
          <Route path='/recommendation' component={Recommendation} />
        </div>
      </Router>
=======
      <Provider store={store}>
        <Router>
          <div>
            <Nav />
            <Route path='/about' component={About} />
            <Route path='/profile' component={Profile} />
            <Route path='/addRecipe' component={AddRecipe} />
            <Route path='/home' component={Recipe} />
            <Route path='/recommendation' component={Recommendation} />
          </div>
        </Router>
      </Provider>
>>>>>>> 76ab876a5f2d26e629a2d0c9ef48d5680b1e593b
    </>
  );
}

export default App;
