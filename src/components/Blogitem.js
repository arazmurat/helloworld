//CREATE WITH rcc SNIPPET
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BlogItem extends Component {
    constructor(props){
        // this not used before super ()
        super();//if we want we use parametre in super for exm super(props)
        // usable this keyword after super ()
        console.log("BlogItem Constructor Method ...","Props ", props)
      }
  /**
   * user ={name:"Tommy",age:12}
   */

  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    //description: PropTypes.string.isRequired,
    //blogMessage: PropTypes.array,
    //nowNmbr: PropTypes.any.isRequired,
    //dataXYZ: PropTypes.string
    //user.PropTypes.shape({name:PropTypes.string,age:PropTypes.number.isRequired}).isRequired //user icin gecerli son isRequired
  };
  // Default Props
  static defaultProps = { title: "One Title", description: "One Desc" };
  render() {
    //console.log(this.props);
    const { blogMessage, nowNmbr } = this.props;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <h3>{this.props.dataXYZ}</h3>
        {/* <h4>{this.props.blogMessage}</h4>
                <h4>{this.props.nowNmbr}</h4> */}
        <h4>{blogMessage}</h4>
        <h4>{nowNmbr}</h4>
      </div>
    );
  }
}
