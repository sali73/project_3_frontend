import React, { Component } from "react";
import MainNav from '../MainNav'
// import "./style.scss";
class About extends Component {
  render() {
    return (
      <div className="App">
        <MainNav></MainNav>
        <main>
        about page
        </main>
        <aside></aside>
      </div>
    )
  }
}
export default About;