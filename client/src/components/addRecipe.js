import React, { useState } from "react";
import "./addRecipe.css";

//REST API call to send new restaurant to database
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

function AddRecipe(props) {
  //useState to change the recipe instructions and name when user enters new values
  const [instructions, setInstructions] = useState("Type instructions here");

  const [name, setName] = useState("Type name here");

  return (
    <div className='recipecontainer'>
      <form>
        <div>
          <label className='title parent'>Name</label>
          <input
            className='box child'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
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

export default AddRecipe;
