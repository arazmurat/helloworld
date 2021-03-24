import React, { Component } from "react";

export default class Blogitem extends Component {
  render() {
    const { blogMessage, newData } = this.props;
    return (
      <div>
        <h2>BLOG ITEM COMPONENT</h2>
        {/*<h4>{this.props.blogMessage}</h4>
				<h5>{this.props.newData}</h5>*/}
        <h4>{blogMessage}</h4>
        <h5>{newData}</h5>
      </div>
    );
  }
}
