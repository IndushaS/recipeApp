import React, { Component } from "react";
import "./RatingButton.css";

class SaveButton extends Component {
    constructor(props) {
        super(props);
        this.state = { save: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({ save: !this.state.save });
    }

    render() {
        let buttonText = this.state.save ? 'Unsave' : 'Save';
        return (
            <button style={{ padding: '10px' }} onClick={this.handleClick} className="save">
                <i className="fa fa-heart"></i>&nbsp;
                {buttonText}</button>
        );
    }
}
export default SaveButton 