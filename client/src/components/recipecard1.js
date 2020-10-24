recipecard1.js
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
        <div class="closed" id="container">
        <header id="toggle">
            <div class="header"></div>
            <div class="title">Mint Julip (Sample) </div>
        </header>
        <article>
            <ul class="ingredients">
                <li>
                    <div class="amount">50ml</div>
                    <div class="ingredient">Rum</div>
                </li>
                <li>
                    <div class="amount">2tsp</div>
                    <div class="ingredient">Sugar</div>
                </li>
                <li>
                    <div class="amount">4 sprigs</div>
                    <div class="ingredient">Mint</div>
                </li>
                <li>
                    <div class="amount">dash</div>
                    <div class="ingredient">Soda water (optional)</div>
                </li>
            </ul>
            <div class="preperation">
                <div>Add the mint sprigs, caster sugar and a couple of tablespoons of crushed ice. </div>
                <div>Begin 'massaging' the mix together with a spoon. The caster sugar helps to bring out the flavour of the mint. Breaking or crushing the mint makes the taste sour, hence the need to gently fold and stir. </div>
                <div>Add 25ml of rum, more crushed ice and continue 'massaging'. Fill with ice, pour in the second 25ml shot of rum and add a dash of soda, if desired.</div>
            </div>
        </article>
    </div>
    );
  
}


}

function byID(id) {
    return document.getElementById(id);
  }
  
  byID("toggle").onclick = function() {
    if (byID("container").classList.contains("closed")) {
      byID("container").classList.remove("closed");
    } else {
      byID("container").classList.add("closed");
    }
  }

export default Recipe;
