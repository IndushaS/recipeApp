import React, { Component, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import App from "../App";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
//pictures
import image1 from "../assets/chefhat.png";
import image2 from "../assets/30-Minute-Instant-Pot-Butter-Chicken-7.jpg";
import RecipeCard from "./RecipeCard";

import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

//Profile component
const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  const [hasError, setErrors] = useState(false);
  const [recipes, setRecipes] = useState();
  const addedRecipe = useSelector((state) => state.addedRecipe);
  const savedRecipe = useSelector((state) => state.savedRecipe);

  async function fetchData() {
    const res = await fetch("/api/saved_recipes");
    res
      .json()
      .then((res) => setRecipes(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    true && (
      //gives each component a class name that can be used in styling
      <div class='container'>
        <div class='heading'>
          <h1>My Profile</h1>
        </div>
        <div class='break'></div>
        <div>
          <img
            className='icon'
            src={
              "https://lh3.googleusercontent.com/ogw/ADGmqu90MCDtF1tR1J6YYOvblwW-zp641R_BfzKlpKgrvA=s64-c-mo"
            }
          />
        </div>
        <div class='details'>
          <div className='username'>
            <h2>Indusha</h2>
          </div>
          <div className='email'>
            <p>indusha999@gmail.com</p>
          </div>

          {/* <div className = "userdata"><JSONPretty data={user} /></div>
        {JSON.stringify(user, null, 2)} */}

          {/* a container for all the carousels we want to implement */}
          <div class='carousels' style={{ width: "1500px" }}>
            <div class='carousel1'>
              {/* the title of the carousel */}
              <div class='heading'>
                <h2>Saved Recipes</h2>
              </div>
              <div class='break'></div>
              {/* the carousel components */}
              <CarouselProvider
                // height, width, and number of slides in the carousel
                naturalSlideWidth={600}
                naturalSlideHeight={500}
                totalSlides={3}
              >
                <Slider>
                  {/* each slide has space for two images, these images must be replaced by recipe cards once 
                those are built out, stubbing for now. Each slide has an index, starting from 0 */}
                  {savedRecipe &&
                    savedRecipe.map((recipe, index) => (
                      <Slide index={1}>
                        <RecipeCard
                          name={recipe.name}
                          id={1}
                          instructions={recipe.instructions}
                          img={recipe.img}
                          ingredients={recipe.ingredients}
                          preview={true}
                        />
                      </Slide>
                    ))}
                  {savedRecipe.length <= 1 && (
                    <Slide index={1}>
                      <p>No Recipes Saved</p>
                    </Slide>
                  )}
                </Slider>
                {/* the buttons that control the slides  */}
                <ButtonBack style={{ padding: "10px" }} className='save'>
                  <i className='fa fa-heart'></i>&nbsp;{"<"}
                </ButtonBack>
                <ButtonNext style={{ padding: "10px" }} className='save'>
                  <i className='fa fa-heart'></i>&nbsp;{">"}
                </ButtonNext>
              </CarouselProvider>
            </div>
            {/* <div class="break2"></div> */}

            <div class='carousel2'>
              {/* the title of the carousel */}
              <div class='heading'>
                <h2>Created Recipes</h2>
              </div>
              <div class='break'></div>
              <CarouselProvider
                // height, width, and number of slides in the carousel
                naturalSlideWidth={600}
                naturalSlideHeight={500}
                totalSlides={3}
              >
                <Slider>
                  {/* each slide has space for two images, these images must be replaced by recipe cards once 
                those are built out, stubbing for now. Each slide has an index, starting from 0 */}
                  {addedRecipe &&
                    addedRecipe.map((recipe, index) => (
                      <Slide index={1}>
                        <RecipeCard
                          name={recipe.name}
                          id={1}
                          instructions={recipe.instructions}
                          img={recipe.img}
                          ingredients={recipe.ingredients}
                          preview={true}
                        />
                      </Slide>
                    ))}
                  {addedRecipe.length <= 1 && (
                    <Slide index={1}>
                      <p>No Created Recipes</p>
                    </Slide>
                  )}
                </Slider>
                {/* the buttons that control the slides  */}
                <ButtonBack style={{ padding: "10px" }} className='save'>
                  <i className='fa fa-heart'></i>&nbsp;{"<"}
                </ButtonBack>
                <ButtonNext style={{ padding: "10px" }} className='save'>
                  <i className='fa fa-heart'></i>&nbsp;{">"}
                </ButtonNext>
              </CarouselProvider>
            </div>
          </div>

          {/* class names for all buttons  */}
          {/* <div class="button-container">
            <Link to="/addRecipe" name="hello" instructions="jee;;p">
              <button type="button1" className="btn btn-warning btn-lg button addrecipe-button" >Add Recipe</button>
            </Link>
          </div>
          <Link to="../App" name="hello" instructions="jee;;p">
            <button type="button2" className="btn btn-warning btn-lg button back-button" >Back</button>
          </Link> */}
          {/* grocery button doesn't work yet, there's no page to link to   */}
        </div>
        <Switch>
          {/* linking to the addrecipe page  */}
          {/* <Route path="/addRecipe">
            <AddRecipe />
          </Route> */}
          <Route path='../App'>
            <App />
          </Route>
        </Switch>
      </div>
    )
  );
};

export default Profile;
