import React, { Component } from 'react'
import "./about.css";
import logo from '../assets/chefhat.png'


class About extends Component {  
render() {
    return (
      <div>
        <div className ="intro"><h1>Start cooking with PocketChef!</h1></div>
        <img className="land_bkg" src={logo}/>
      </div>
    )
  }
}

export default About;


