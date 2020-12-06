import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import JSONPretty from 'react-json-pretty';
import RecipeCard from "./RecipeCard";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import "./Recommendation.css";
import {useIsMounted} from 'react-tidy'


//Recommendation component
const Recommendations = () => {
    const { user, isAuthenticated } = useAuth0();
    const [hasError, setErrors] = useState(false);
    const [recommendations, setRecommendations] = useState([]);
    const [id, setId] = useState();
    const [recipes, setRecipes] = useState();



    async function fetchData() {
        const res = await fetch("https://recipe342backend.herokuapp.com/getRecommendations?id=3");
        res
            .json()
            .then(res => setRecommendations(res))
            .catch(err => setErrors(err));
    }

    async function getRecipes() {
        const res = await fetch("https://recipe342backend.herokuapp.com/getrecipes");
        res
          .json()
          .then(res => setRecipes(res))
          .catch(err => setErrors(err));
      }


    async function getUserid() {
        const result = await fetch("https://recipe342backend.herokuapp.com/getUserid?email=indusha999@gmail.com");
        result
            .json()
            .then(result => setId(result))
            .catch(error => setErrors(error));
    }


    const isMounted = useIsMounted()

    React.useEffect(() => {
      fetchData().then((result) => {
        if (isMounted) {
          setRecommendations(result)
        }
      })

      getRecipes().then((result) => {
        if (isMounted) {
          setRecipes(result)
        }
      })
    }, [])




    //console.log(recipes && recipes.filter((recipe) => {return recommendations && recipe.recipeName == recommendations[0]}));


    let filteredRecipes = recommendations && recipes && recipes.filter(function (o1) {
      return recommendations.some(function (o2) {
          return o1.recipeName === o2; // return the ones with equal id
     });
  });
  




    //If user is logged in, it displays user information
    return (
        true && (

          


            <div>
                <img src={"https://lh3.googleusercontent.com/ogw/ADGmqu90MCDtF1tR1J6YYOvblwW-zp641R_BfzKlpKgrvA=s64-c-mo"} />
                <h2>Recommendations for indusha</h2>
         
        
        <hr />



                <Row gutter={40}>
            {filteredRecipes && filteredRecipes.map((
              recipe) => (

                <Col
                  xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 4 }}
                  lg={{ span: 3 }} xl={{ span: 3 }}>

                  <RecipeCard name={recipe.recipeName} id={recipe.idrecipe} instructions={recipe.recipeInstruction} img={recipe.imgURL} ingredients={recipe.ingredients}  />



                </Col>

              ))}
          </Row>


            </div>
        )
    )
}

export default Recommendations