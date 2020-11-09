import React, { Component } from "react";
import ReactBootstrap, { Card, Button, Col, Grid, Panel, FormGroup } from 'react-bootstrap'



const RecipeCard = (props) => {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.instructions}
                    </Card.Text>

                </Card.Body>
            </Card>


        </div>
    )


}

export default RecipeCard