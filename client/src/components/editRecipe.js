import React, { useState } from "react";
import "./editRecipe.css";

//function sends a call to the server to edit the existing recipe. takes recipe ID, instructions and name as parameters
function handleSubmit(event) {
  event.preventDefault();
  fetch("/api/editRecipe", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idrecipe: "props.location.recipeInstruction",
      recipeName: "name",
      recipeInstruction: "instructions",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function EditRecipe(props) {
  //initilize useState to Create functionality of passing exisitng recipes as props
  const [instructions, setInstructions] = useState(
    props.location.recipeInstruction
  );

  const [name, setName] = useState(props.location.recipeName);

  return (
    <div className='recipecontainer'>
      <form>
        <div>
          <label className='title parent'>Name</label>
          <input className='box child' type='text' value={name}></input>
        </div>
        <div>
          <label className='title'>Instructions</label>
          <textarea
            className='textbox'
            type='text'
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button type='button' className='btn btn-danger btn-lg button'>
            Cancel
          </button>
          <button
            type='button'
            className='btn btn-success btn-lg button'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditRecipe;
