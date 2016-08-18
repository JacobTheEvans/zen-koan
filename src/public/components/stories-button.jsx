import React from "react";
import FontAwesome from "react-fontawesome";

class StoriesButton extends React.Component {
  render() {
    return (
      <a href="/#/story" className="button back-button"><FontAwesome name="leanpub" /></a>
    )
  }
}

export default StoriesButton;
