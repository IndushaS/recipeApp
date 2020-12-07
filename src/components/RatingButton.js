
import React, { Component } from "react";
import "./RatingButton.css";

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { liked: props.liked, idrecipe: props.idrecipe, totalLikes: props.totalLikes };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({ liked: !this.state.liked });
        this.changeLikes(this.state.liked)
    }
    changeLikes(status) {
        console.log(status)
        if (status === 1 || status === true) {
            this.props.decrement()
        }
        if (status === 0 || status === false) {
            this.props.increment()
        }
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

