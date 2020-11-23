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
        const res = await fetch("https://recipe342backend.herokuapp.com/getRecommendations?id=3");
        res
            .json()
            .then(res => setRecommendations(res))
            .catch(err => setErrors(err));
    }

    async function getUserid() {
        const result = await fetch("https://recipe342backend.herokuapp.com/getUserid?email=indusha999@gmail.com");
        result
            .json()
            .then(result => setId(result))
            .catch(error => setErrors(error));
    }



    useEffect(() => {

        fetchData();
    });

    //If user is logged in, it displays user information
    return (
        true && (
            <div>
                <img src={"https://lh3.googleusercontent.com/ogw/ADGmqu90MCDtF1tR1J6YYOvblwW-zp641R_BfzKlpKgrvA=s64-c-mo"} />
                <h2>Recommendations for indusha</h2>


                <span>{JSON.stringify(recommendations)}</span>
                <hr />

            </div>
        )
    )
}

export default Recommendations