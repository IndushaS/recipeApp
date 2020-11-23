import React, { Component } from "react";
import ReactBootstrap, { Card, Button } from 'react-bootstrap'
import LikeButton from './RatingButton.js'



const RecipeCard = (props) => {

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
                    </Card.Text>
                    <LikeButton />
                </Card.Body>
            </Card>


        </div>
    )


}

export default RecipeCard