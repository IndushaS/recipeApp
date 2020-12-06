
import React, { Component } from "react";
import "./RatingButton.css";

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({ liked: !this.state.liked });
    }
    render() {
        let buttonText = this.state.liked ? 'Unlike' : 'Like';
        return (
            <button style={{ padding: '10px' }} onClick={this.handleClick} className="like">
                <i className="fa fa-heart"></i>&nbsp;
                {buttonText}</button>
        );
    }
}
export default LikeButton

