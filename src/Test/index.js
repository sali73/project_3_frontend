import React, { Component } from "react";
import MainNav from '../MainNav'
class  Test extends Component {
  render() {
    return (
      <div className="App">
        <MainNav></MainNav>
        <main>
        <h1>{this.props.match.params.id}</h1>
        </main>
        <aside></aside>
      </div>
    )
  }
}
export default Test;