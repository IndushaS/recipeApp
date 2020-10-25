import React, { Component } from "react";
import "./Recipe.css";

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

  render() {
    return (
      <div>
        <ul>
          {this.state.recipes.map((
            recipe //iterate through each recipe object in the state array display the id, name and instructions of each recipe
          ) => (
            <li className="Recipes" key={recipe.idrecipe}>
              <h1>
                <p>id :{recipe.idrecipe}</p>
                <p>name : {recipe.recipeName}</p>
                <p>instructions: {recipe.recipeInstruction}</p>
              </h1>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Recipe; //Export the recipe component to be used in the main index.js file
