
import React, { Component } from "react";
import MainNav from '../MainNav'
class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav></MainNav>
        <main>
        Home page
        </main>
        <aside></aside>
      </div>
    )
  }
}
export default App;
