import React from "react";
import {Link} from "react-router";

class KoanLink extends React.Component {
  render() {
    return (
      <div className="story-link">
      <Link className="story-link-a" to={"/koan/" + this.props.koan.title}><p>{this.props.koan.title}</p></Link>
      </div>
    )
  }
}

export default KoanLink;
