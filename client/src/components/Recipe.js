import React from "react";
import "./recipe.css";
import { useAuth0 } from '@auth0/auth0-react';

const Recipe = () => {



  const {isAuthenticated } = useAuth0();



  return ( isAuthenticated && ( 

      <div>
        <ul>
    
              <h1>
                <p>id </p>
                <p>name </p>
                <p>picture:</p>
              </h1>
          ))}
        </ul>
      </div>
    ));
  }


export default Recipe;