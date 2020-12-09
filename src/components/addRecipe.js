import React, { Component } from "react";
import "./addRecipe.css";
import Form from "react-bootstrap/Button";
import Button from "react-bootstrap/Button";
import add from "../assets/addImage.png";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addNewRecipe } from "../store/actions/recipeActions";

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

  handleIngredientsChange = (event) => {
    this.setState({
      ingredients: event.target.value,
    });
    console.log("ingredients" + this.state.ingredients);
  };

  //change target image input field when user types
  handleImageChange = (event) => {
    this.setState({
      img: event.target.value,
    });
  };

  //submit to the database when a user is completed with creating a new recipe. checks if all fields have characters
  submit = () => {
    const data = {
      name: this.state.name,
      img: this.state.img,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
    };

    this.props.addNewRecipe(data);

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
          <label className='recipeTitle'>ImgURL</label>
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
            value={this.props.ingredients}
            onChange={this.handleIngredientsChange}
            className='recipeInstructions'
          ></textarea>
          <div className='buttons'>

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

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addNewRecipe: addNewRecipe }, dispatch);
}

export default connect(null, matchDispatchToProps)(addRecipe);
