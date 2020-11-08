import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import JSONPretty from 'react-json-pretty';


//Recommendation component
const Recommendations = () => {
  const { user, isAuthenticated } = useAuth0();
  const [hasError, setErrors] = useState(false);
  const [recommendations, setRecommendations] = useState('getting recommendations...');
  const [id, setId] = useState();


  async function fetchData() {
    const res = await fetch("/getRecommendations?id=" + id);
    res
      .json()
      .then(res => setRecommendations(res))
      .catch(err => setErrors(err));
  }

  async function getUserid() {
    const result = await fetch("/getUserid?email=" + user.email);
    result
      .json()
      .then(result => setId(result))
      .catch(error => setErrors(error));
  }



  useEffect(() => {
    getUserid();
    fetchData();
  });

  //If user is logged in, it displays user information
  return (
    isAuthenticated && ( 
     <div>
        <img src={user.picture} alt={user.name} />
        <h2>Recommendations for {user.name}</h2>
        <h2>User ID {JSON.stringify(id)}</h2>

        <span>{JSON.stringify(recommendations)}</span>
        <hr />

      </div>
    )
  )
}

export default Recommendations
