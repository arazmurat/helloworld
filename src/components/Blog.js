import React, { Component } from "react";
import "../Blog.css";
import Blogitem from "./Blogitem"

//class Blog extends React.Component {}

class Blog extends Component {
  render() {
		let blogText = "TEXT TEXT TEXT"
		const blogParaf = <h2>BLOG NOTES<button>BUTTON</button></h2>
    return (
      <div className="blogTitle">
        <h1>BLOG COMPONENT</h1>
				<Blogitem newData={blogParaf} blogMessage = "Testing with PRPS "/>
				<p>
					{blogText}
				</p>
				<label>{5/2 === 2.5 ? "YES": "NO"}</label>
				{blogParaf}
				{5+6}
				

      </div>
    );
  }
}

export default Blog;
