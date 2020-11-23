import React, { Component } from "react";


class addRecipe extends Component {
  //if the user is editing a current recipe, pass the name and intructions as props
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      instructions: this.props.instructions
    };
  }

  //change target name input field when user types
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  //change target instructions input field when user types
  handleInstructionsChange = (event) => {
    this.setState({
      instructions: event.target.value
    });
  }
  render() {
    return (
      <form>
        <div>
          <label>Name</label>
          <input type="text" value={this.props.name} onChange={this.handleNameChange}></input>
          <label>Instructions</label>
          <textarea type="text" value={this.props.instructions} onChange={this.handleInstructionsChange}></textarea>
          <button type="button" className="btn btn-danger btn-lg">
            Cancel
          </button>
          <button type="button" className="btn btn-success btn-lg">
            Submit
          </button>
        </div>
      </form>
    )
  }

}

export default addRecipe
