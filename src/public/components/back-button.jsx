import React from "react";
import FontAwesome from "react-fontawesome";

class BackButton extends React.Component {
  render() {
    return (
      <a href="/#/" className="button back-button"><FontAwesome name="reply" /></a>
    )
  }
}

export default BackButton;
