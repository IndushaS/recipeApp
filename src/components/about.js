import React, { Component } from "react";
import "./about.css";
import logo from "../assets/chefhat.png";

class About extends Component {
  render() {
    return (
      <div>
        <div className='intro'>
          <h1>Start cooking with PocketChef!</h1>
        </div>
        <p>
          This is a new platform to discover awesome recipes, made by Bhoomika,
          Defne, Hamza, Josh, Indusha, Nayab, Nimisha
        </p>
        <img className='land_bkg' src={logo} />
      </div>
    );
  }
}

export default About;
