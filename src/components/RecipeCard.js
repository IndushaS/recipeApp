import React, { Component } from "react";
import ReactBootstrap, { Card, Button, Col, Grid, Panel, FormGroup } from 'react-bootstrap'
import ReactDOM from "react-dom";
import "./RecipeCard.css";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";




const RecipeCard = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [title, setTitle] = React.useState("Transitioning...");

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    const modalLoaded = () => {
        setTitle("Modal Ready");
    };

    return (
        <>
            <div classname="modalbutton" >
                <div className="cardLayout">
                    <Button variant="primary" onClick={showModal} className="viewButton">
                        <img style={{ display: "none" }} variant="top" className="imgrecipe" src={props.img} /> <p>

                        </p>
                        <Modal.Title className="title">{props.name}</Modal.Title>
                        <p> {props.ingredients}</p>
         View Full Recipe  </Button>
                </div>
                <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded} id="modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title"> {props.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalbody"> <img variant="top" className="img1recipe" src={props.img} />
                        <Modal.Title>{props.name}</Modal.Title>
                        <h1> Ingredients: </h1>

                        <p> {props.ingredients}</p>
                        <h1>  Instructions </h1>
                        <p>           {props.instructions}</p>

                    </Modal.Body>
                    <button onClick={hideModal} id="buttonhide" >Hide</button>
                </Modal>
            </div>
        </>
    );
}
const customStyles = {
    content: {
        top: '85%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',

        width: '100%',

    },
};
export default RecipeCard