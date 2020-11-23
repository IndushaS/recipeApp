import React, { Component } from "react";
import ReactBootstrap, {
  Card,
  Button,
  Col,
  Grid,
  Panel,
  FormGroup,
} from "react-bootstrap";
import LikeButton from "./RatingButton.js";
import Modal from "react-modal";
import "./recipecard.css";

Modal.setAppElement("#root");

const RecipeCard = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [recipeName, setRecipeName] = React.useState(props.name);
  const [reciepInstructions, setRecipeInstructions] = React.useState(
    props.instructions
  );
  const [recipeImage, setRecipeImage] = React.useState(props.img);
  const [recipeIngredients, setRecipeIngredients] = React.useState(
    props.ingredients
  );

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleNameChange = (event) => {
    setRecipeName(event.target.value);
  };
  const handleInstructionsChange = (event) => {
    setRecipeInstructions(event.target.value);
  };
  const handleImageChange = (event) => {
    setRecipeImage(event.target.value);
  };
  const handleIngredientsChange = (event) => {
    setRecipeIngredients(event.target.value);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant='top' src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.instructions}
            <p></p>
            <h4>ingredients:</h4>
            {props.ingredients}

            {/* edit recipe modal */}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
              <form className='hello'>
                <div className='addRecipeContainer'>
                  <label className='headerTitle'>Edit Recipe</label>

                  <label className='recipeTitle'>Image</label>
                  <img
                    className='recipeImg'
                    src={recipeImage}
                    id='img-change'
                    alt='Loading...'
                  />
                  <input
                    type='text'
                    value={recipeImage}
                    className='recipeName'
                    onChange={handleImageChange}
                  ></input>

                  <label className='recipeTitle'>Name</label>
                  <input
                    type='text'
                    value={recipeName}
                    onChange={handleNameChange}
                    className='recipeName'
                  ></input>
                  <label className='recipeTitle'>Instructions</label>
                  <textarea
                    type='text'
                    value={reciepInstructions}
                    onChange={handleInstructionsChange}
                    className='recipeInstructions'
                  ></textarea>
                  <label className='recipeTitle'>Ingredients</label>
                  <textarea
                    type='text'
                    value={recipeIngredients}
                    onChange={handleIngredientsChange}
                    className='recipeInstructions'
                  ></textarea>
                  <div className='buttons'>
                    <button
                      type='button'
                      className='btn btn-danger btn-lg'
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type='button'
                      className='btn btn-success btn-lg'
                      onClick={() => {
                        alert(`Successfully updated recipe ${recipeName};
                         `);
                        closeModal();
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </Modal>
          </Card.Text>
          <div className='buttonLayout'>
            <LikeButton />
            <Button onClick={openModal}>Edit</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
