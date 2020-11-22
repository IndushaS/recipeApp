import React, { Component, useState, useEffect } from "react";
import AddRecipe from "./addRecipe";
import "./recipe.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ReactBootstrap, {Card, Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap'


const Recipe = () => {
  const { user, isAuthenticated } = useAuth0();
  const [hasError, setErrors] = useState(false);
  const [recipes, setRecipes] = useState();
  const [input, setInput] = useState('');

  async function fetchData() {
    const res = await fetch("/getRecipes");
    res
      .json()
      .then(res => setRecipes(res))
      .catch(err => setErrors(err));
  }



  useEffect(() => {
    fetchData();
  });

  //const updateSearch = (event) => {
    //setSearch({ search: event.target.value.substr(0, 20) });
  //}

  const onChange = (e) => {
    setInput(e.currentTarget.value);
   }


  let filteredRecipes = recipes && recipes.filter(
    (recipe) => {
      return recipe.recipeName.toLowerCase().indexOf(input) !== -1;
    }
  );

  return (

    isAuthenticated && ( 


    <Router>
      <div>
      <input type="text" placeholder = 'enter' onChange={onChange}/>
        <ul>
          {filteredRecipes && filteredRecipes.map((
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


        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        <Switch>
          <Route path="/addRecipe">
            <AddRecipe />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  );
}

export default Recipe; //Export the recipe component to be used in the main index.js file