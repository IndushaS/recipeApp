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
 <div class="card-container">
  <div class="card u-clearfix">
    <div class="card-body">
    <div class="card-border">
      <ul>
      {this.state.recipes.map((recipe) => (//iterate through each recipe object in the state array display the id, name and instructions of each recipe
        <li className="Recipes" key={recipe.idrecipe}> {/* assigning recipe ID as a key */}
        <h1>
          <span class="card-number card-circle subtle">ID{recipe.idrecipe}</span> {/* placeholder for recipe ID */}
          <h2 class="card-title">{recipe.recipeName} </h2>{/* placeholder for recipe name */}
          <div class="card-read"></div>
          <span class="card-description subtle"> Instructions:
          <p>{recipe.recipeInstruction}</p> </span> {/* placeholder for recipe instructions */}
        </h1>
        </li>
      ))}
    </ul>
    </div>
    </div>
    <img src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt="" class="card-media" />
  </div>
  <div class="card-shadow"></div>
 </div>
 </div>  
 )}
  
 }


export default Recipe; //Export the recipe component to be used in the main index.js file
