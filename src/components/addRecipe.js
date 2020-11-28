import React, { Component } from "react";
import "./addRecipe.css";
import Form from "react-bootstrap/Button";
import Button from "react-bootstrap/Button";
import add from "../assets/addImage.png";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

function handleSubmit(event) {
  event.preventDefault();
  fetch("/api/addRecipe", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipeName: "name",
      recipeInstruction: "instructions",
      idType: "1",
      imgUrl: " ",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

class addRecipe extends Component {
  //if the user is editing a current recipe, pass the name and intructions as props
  constructor(props) {
    super(props);
    this.state = {
      img: "https://i.imgur.com/3mrPamO.png",
      name: this.props.name,
      instructions: this.props.instructions,
    };
  }

  //change target name input field when user types
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  //change target instructions input field when user types
  handleInstructionsChange = (event) => {
    this.setState({
      instructions: event.target.value,
    });
  };

  //change target image input field when user types
  handleImageChange = (event) => {
    this.setState({
      img: event.target.value,
    });
    console.log(this.state.img);
  };

  //submit to the database when a user is completed with creating a new recipe. checks if all fields have characters
  submit = () => {
    if (this.state.name && this.state.instructions) {
      alert(`Successfully created recipe ${this.state.name}`);
    } else {
      alert("Please complete form before submitting");
    }
  };

  render() {
    return (
      <form>
        <div className='addRecipeContainer'>
          <label className='headerTitle'>Add New Recipe</label>

          <label className='recipeTitle'>Image</label>
          <img
            className='recipeImg'
            src={this.state.img}
            id='img-change'
            alt='Loading...'
          />
          <input
            type='text'
            value={this.props.name}
            onChange={this.handleImageChange}
            className='recipeName'
          ></input>

          <label className='recipeTitle'>Name</label>
          <input
            type='text'
            value={this.props.name}
            onChange={this.handleNameChange}
            className='recipeName'
          ></input>
          <label className='recipeTitle'>Instructions</label>
          <textarea
            type='text'
            value={this.props.instructions}
            onChange={this.handleInstructionsChange}
            className='recipeInstructions'
          ></textarea>
          <label className='recipeTitle'>Ingredients</label>
          <textarea
            type='text'
            value={this.props.instructions}
            onChange={this.handleInstructionsChange}
            className='recipeInstructions'
          ></textarea>
          <div className='buttons'>
            <button type='button' className='btn btn-danger btn-lg'>
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-success btn-lg'
              onClick={this.submit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default addRecipe;