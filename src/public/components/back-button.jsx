import React from "react";
import FontAwesome from "react-fontawesome";
import {Link} from "react-router";


class BackButton extends React.Component {
  render() {
    return (
      <Link to="/koans" className="button back-button"><FontAwesome name="reply" /></Link>
    )
  }
}

export default BackButton;
