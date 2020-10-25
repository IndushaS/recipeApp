import React, { Component } from "react";
import "./recipe.css";

class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    fetch("/getRecipes")
      .then((res) => res.json())
      .then((recipes) =>
        this.setState({ recipes }, () =>
          console.log("recipes fetched...", recipes)
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
      {this.state.recipes.map((recipe) => (
        <li className="Recipes" key={recipe.idrecipe}>
        <h1> 
          <span class="card-number card-circle subtle">ID{recipe.idrecipe}</span>
          <h2 class="card-title">{recipe.recipeName} </h2>
          <div class="card-read"></div>
          <span class="card-description subtle"> Instructions: 
          <p>{recipe.recipeInstruction}</p> </span>
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

export default Recipe;
