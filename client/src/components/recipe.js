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
        <ul>
          {this.state.recipes.map((recipe) => (
            <li className="Recipes" key={recipe.idrecipe}>
              <h1>
                <p>id :{recipe.idrecipe}</p>
                <p>name : {recipe.recipeName}</p>
                <p>picture: {recipe.img}</p>
              </h1>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Recipe;
