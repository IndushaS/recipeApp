import React, { Component, useState, useEffect } from "react";
import AddRecipe from "./addRecipe";
import "./Recipe.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import RecipeCard from "./RecipeCard";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import ReactBootstrap, {
  Card,
  Button,
  Grid,
  Panel,
  FormGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const Recipe = () => {
  const { user, isAuthenticated } = useAuth0();
  const [hasError, setErrors] = useState(false);
  const [recipes, setRecipes] = useState();
  const [input, setInput] = useState("");
  // const [likes, setLikes] = useState([]);

  async function fetchData() {
    const res = await fetch(
      "https://recipe342backend.herokuapp.com/getrecipes"
    );
    res
      .json()
      .then((res) => setRecipes(res))
      .catch((err) => setErrors(err));
  }
  /* async function getRating() {
     const res = await fetch(
       "https://recipe342backend.herokuapp.com/api/recipe_likes"
     );
     res
       .json()
       .then((res) => setLikes(res))
       .catch((err) => setErrors(err));
   }
 */
  useEffect(() => {
    fetchData();
    //getRating();
  });

  //const updateSearch = (event) => {
  //setSearch({ search: event.target.value.substr(0, 20) });
  //}

  const onChange = (e) => {
    setInput(e.currentTarget.value);
  };

  let filteredRecipes =
    recipes &&
    recipes.filter((recipe) => {
      return recipe.recipeName.toLowerCase().indexOf(input) !== -1;
    });

  /* const items = likes.map((i) => {
     return i.total_likes;
   });*/

  return (
    true && (
      <Router>
        <div className='recipeContainer'>
          <div style={{ margin: "30px" }}>
            <InputGroup size='lg'>
              <InputGroup.Prepend>
                <InputGroup.Text id='inputGroup-sizing-lg'>
                  Start Cooking:
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={onChange}
                placeholder='Enter a recipe name'
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
              />
            </InputGroup>
          </div>
          <Row gutter={40}>
            {filteredRecipes &&
              filteredRecipes.map((recipe, index) => (
                <Col
                  xs={{ span: 6 }}
                  sm={{ span: 4 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                >
                  <RecipeCard
                    name={recipe.recipeName}
                    id={recipe.idrecipe}
                    instructions={recipe.recipeInstruction}
                    img={recipe.imgURL}
                    ingredients={recipe.ingredients}
                    numLikes={recipe.totalLikes}
                    likeStatus={recipe.likedStatus}
                  />
                </Col>
              ))}
          </Row>

          <Switch>
            <Route path='/addRecipe'>
              <AddRecipe />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  );
};

export default Recipe; //Export the recipe component to be used in the main index.js file
