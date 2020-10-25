import React, { Component } from "react";


class addRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      instructions: this.props.instructions
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  
  handleInstructionsChange = (event) => {
    this.setState({
      instructions: event.target.value
    });
  }
  
  render() {
    console.log("test", this.state.name);
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