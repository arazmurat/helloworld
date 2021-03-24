import React, { Component } from "react";

export default class Test extends Component {
  render() {
    const { blogM, newD, numD } = this.props;
    return (
      <div>
        <h2>TEST COMPONENT</h2>
        <h3>react</h3>
        <h3>node</h3>

        <h6>{blogM}</h6>
        <h6>{newD}</h6>
        <h1>{numD}</h1>
      </div>
    );
  }
}
