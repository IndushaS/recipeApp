import React, { Component } from "react";
import "./RatingButton.css";
import { bindActionCreators } from "redux";
import { saveRecipe } from "../store/actions/recipeActions";
import { connect } from "react-redux";
class SaveButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            save: false,
            name: props.name,
            img: props.img,
            ingredients: props.ingredients,
            instructions: props.instructions,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({ save: !this.state.save });
        const data = {
            name: this.state.name,
            img: this.state.img,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions,
        };
        this.props.saveRecipe(data);
    }

    render() {
        let buttonText = this.state.save ? "Unsave" : "Save";
        return (
            <button
                style={{ padding: "10px" }}
                onClick={this.handleClick}
                className='save'
            >
                <i className='fa fa-heart'></i>&nbsp;
                {buttonText}
            </button>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ saveRecipe: saveRecipe }, dispatch);
}

export default connect(null, matchDispatchToProps)(SaveButton);
