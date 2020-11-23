import React, { Component } from "react";
import ReactBootstrap, { Card, Button, Col, Grid, Panel, FormGroup } from 'react-bootstrap'
import LikeButton from './RatingButton.js'
import SaveButton from './SaveButton.js'



const RecipeCard = (props) => {

// --------------------------sprint 4 backlog---------------------------
// --------------------------save and like button api calls---------------------------

// const [like_button, setLikeButton] = useState();
// const [save_button, setSaveButton] = useState();
// const [id, setId] = useState();

// async function getLiked() {
//     const res = await fetch("/api/like_button?iduser="+id+"&idrecipe="+recipes+"&rating"+likes);
//      res
//      .json()
//      .then(res => setLikeButton(res))
//      .catch(err => setErrors(err));
// }

// async function getSaved() {
//     const res = await fetch("/api/save_button?iduser="+id+"&idrecipe="+recipes);
//      res
//      .json()
//      .then(res => setSaveButton(res))
//      .catch(err => setErrors(err));
// }

// async function getUserid() {
//     const result = await fetch("/getUserid?email=" + user.email);
//     result
//       .json()
//       .then(result => setId(result))
//       .catch(error => setErrors(error));
//   }

//   useEffect(() => {
//     getUserid();
//   });

// const handleClick = (e) => {
//     setLikeButton( liked !this.state.liked );
// }
// --------------------------sprint 4 backlog---------------------------

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.instructions}
                        <p></p>
                        <h4>ingredients:</h4>
                        {props.ingredients}
                        <p></p>
                        <p><b>Likes: </b>
                        {props.likes}
                        </p>
                    </Card.Text>
                    <LikeButton />
                    <SaveButton />
                   {/* <LikeButton onClick={getLiked()} liked={like_button} />
                    <SaveButton onClick={getSaved()} saved={save_button}/> */}
                </Card.Body>
            </Card>


        </div>
    )


}

export default RecipeCard