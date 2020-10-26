import React, { Component } from "react";
import AddRecipe from "./addRecipe";
import "./Recipe.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [], // State array to hold recipe objects that are fetched from the database
    };
  }

  componentDidMount() {
    fetch("/getRecipes") //Api call using route from server.js to obtain recipe data
      .then((res) => res.json())
      .then((recipes) =>
        this.setState(
          { recipes },
          () =>
            //inserts data to the state array of the component
            console.log("recipes fetched...", recipes) //confirm that the recipes were fetched in the console
        )
      );
  }
  /*isAuthenticated() {
    var Authenticated = useAuth0();
    this.state.isAuthenticated = Authenticated;
  }*/

  //added react route link in this component to open the edit recipe form with prefilled fields
  render() {
    return (
      <Router>
        <div>
          <ul>
            {this.state.recipes.map((
              recipe //iterate through each recipe object in the state array display the id, name and instructions of each recipe
            ) => (
              <li className="Recipes" key={recipe.idrecipe}>
                <Link to="/addRecipe" name="hello" instructions="jee;;p">
                  Edit
                </Link>
                {/* <button type = "button" className="btn btn-primary btn-lg" onClick={() => console.log('hello')}>Edit</button> */}
                <h1>
                  <p>id :{recipe.idrecipe}</p>
                  <p>name : {recipe.recipeName}</p>
                  <p>instructions: {recipe.recipeInstruction}</p>
                </h1>
              </li>
            ))}
          </ul>
          <Switch>
            <Route path="/addRecipe">
              <AddRecipe />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Recipe; //Export the recipe component to be used in the main index.js file
