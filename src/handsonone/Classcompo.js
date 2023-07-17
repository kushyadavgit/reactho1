import React, { Component } from "react";
import "../App.css";

class Classcompo extends Component {
  render() {
    return (
      <div id="box2">
        <h1>This is createdusing class component</h1>
        <p>This done is using external Css</p>
        <p style={{ color: "blue" }}>This is done using inline CSS</p>
      </div>
    );
  }
}
export default Classcompo;
