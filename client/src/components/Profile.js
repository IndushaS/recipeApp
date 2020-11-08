import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import JSONPretty from 'react-json-pretty';
import AddRecipe from "./addRecipe";
import App from "../App";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
//pictures 
import image1 from '../chefhat.png'
import image2 from '../30-Minute-Instant-Pot-Butter-Chicken-7.jpg'


//Profile component
const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth0();

  //If user is logged in, it displays user information

  return (
    isAuthenticated && (
      //gives each component a class name that can be used in styling 
     <div class = "container">
     <div class = "heading"><h1>My Profile</h1></div>
     <div class="break"></div>
     <div><img className = "icon" src={user.picture} alt={user.name} /></div>
     <div class = "details">
      <div className= "username"><h2>{user.name}</h2></div>
      <div className= "email"><p>{user.email}</p></div>
      
      {/* <div className = "userdata"><JSONPretty data={user} /></div>
        {JSON.stringify(user, null, 2)} */}
      
      {/* a container for all the carousels we want to implement */}
      <div class = "carousels">
        <div class = "carousel1">
        {/* the title of the carousel */}
        <div class = "heading"><h2>Saved Recipes</h2></div> 
     <div class="break"></div>
     {/* the carousel components */}
      <CarouselProvider
              // height, width, and number of slides in the carousel
              naturalSlideWidth={450}
              naturalSlideHeight={150}
              totalSlides={3}
            >
              <Slider>
                {/* each slide has space for two images, these images must be replaced by recipe cards once 
                those are built out, stubbing for now. Each slide has an index, starting from 0 */}
                <Slide index={0}><img className= "slide-image1" src={image2}></img><img className= "slide-image2" src={image2}></img></Slide>
                <Slide index={1}><img className= "slide-image1" src={image2}></img><img className= "slide-image2" src={image2}></img></Slide>
                <Slide index={2}><img className= "slide-image1" src={image2}></img><img className= "slide-image2" src={image2}></img></Slide>
              </Slider>
              {/* the buttons that control the slides  */}
              <ButtonBack type="button4" className="btn btn-warning btn-lg button left-button">{"<"}</ButtonBack>
              <ButtonNext type="button4" className="btn btn-warning btn-lg button right-button">{">"}</ButtonNext>
            </CarouselProvider>
            </div>

        <div class = "carousel2">
          {/* the title of the carousel */}
        <div class = "heading"><h2>Created Recipes</h2></div>
     <div class="break"></div>
      <CarouselProvider
              // height, width, and number of slides in the carousel
              naturalSlideWidth={450}
              naturalSlideHeight={150}
              totalSlides={3}
            >
              <Slider>
                {/* each slide has space for two images, these images must be replaced by recipe cards once 
                those are built out, stubbing for now. Each slide has an index, starting from 0 */}
              <Slide index={0}><img className= "slide-image1" src={image2}></img><img className= "slide-image2" src={image2}></img></Slide>
              <Slide index={1}><img className= "slide-image1" src={image2}></img><img className= "slide-image2" src={image2}></img></Slide>
              <Slide index={2}><img className= "slide-image1" src={image2}></img><img className= "slide-image2" src={image2}></img></Slide>
              </Slider>
               {/* the buttons that control the slides  */}
              <ButtonBack type="button4" className="btn btn-warning btn-lg button left-button">{"<"}</ButtonBack>
              <ButtonNext type="button4" className="btn btn-warning btn-lg button right-button">{">"}</ButtonNext>
            </CarouselProvider>
            </div>
      </div>

      {/* class names for all buttons  */}
      <div class = "button-container">
      <Link to="/addRecipe" name="hello" instructions="jee;;p">
      <button type="button1" className="btn btn-warning btn-lg button addrecipe-button" >Add Recipe</button>
                </Link>
      </div>
      <Link to="../App" name="hello" instructions="jee;;p">
      <button type="button2" className="btn btn-warning btn-lg button back-button" >Back</button>
        </Link>
      {/* grocery button doesn't work yet, there's no page to link to   */}
      <button type="button3" className="btn btn-warning btn-lg button grocerylist-button" onClick={() => user()}>Grocery List</button>
      <button type="button4" className="btn btn-warning btn-lg button logout-button" onClick={() => logout()}>Log Out</button>

      </div>
      <Switch>
        {/* linking to the addrecipe page  */}
            <Route path="/addRecipe">
              <AddRecipe />
            </Route>
            <Route path="../App">
              <App />
            </Route>
          </Switch>
      </div>
   

    )

  )
}

export default Profile

