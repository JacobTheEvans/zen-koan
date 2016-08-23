import React from "react";
import FontAwesome from "react-fontawesome";
import {Link} from "react-router";

class KoanButton extends React.Component {
  render() {
    return (
      <Link to="/koans" className="button back-button"><FontAwesome name="leanpub" /></Link>
    )
  }
}

export default KoanButton;
