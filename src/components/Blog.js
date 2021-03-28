import React, { Component } from "react";
import "../Blog.css";
import BlogItem from "./BlogItem";


//class Blog extends React.Component {}
class Blog extends Component {
  
  render() {
    let blogText = "TEXT TEXT TEXT";
    const blogParaf = (
      <h2>
        BLOG NOTES <button>BUTTON</button>
      </h2>
    );
    let nowNumber = 123;
    let blogInfos = [
      { textHead: "Blog 1 textHead", textDesc: "Blog 1 textDescription ...." },
      { textHead: "Blog 2", textDesc: "Blog 2 Description ...." },
      
      { textHead: "Blog 1 ile Blog2 ve bu yazi ", textDesc: "blogInfos.map den geliyor" },
    ];
    
    return (
      <div className="blogTitle">
        <h1>BLOG COMPONENT</h1>
        {/* <BlogItem title={blogInfos[0].textHead} description={blogInfos[0].textDesc}/>
        <BlogItem title={blogInfos[1].textHead} description={blogInfos[1].textDesc}/>
        <BlogItem title={blogInfos[2].textHead} description={blogInfos[2].textDesc}/>
        <BlogItem title={blogInfos[3].textHead} description={blogInfos[3].textDesc}/> */}
        

        {blogInfos.map((item, index) => (
          <BlogItem
            key={index}
            title={item.textHead}
            description={item.textDesc}
          />
        ))}

        <BlogItem
          dataXYZ="new h3 text"
          newData={blogParaf}
          nowNmbr={nowNumber}
          blogMessage="Testing with PRPS"
        />
        <p>{blogText}</p>
        <label>{5 / 2 === 2.5 ? "YES" : "NO"}</label>
        {blogParaf}
        {5 + 6}
        

      </div>
    );
  }
}

export default Blog;
