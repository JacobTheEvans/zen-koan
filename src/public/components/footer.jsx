import React from "react";
import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-text"><FontAwesome name="copyright" /> 2016, Apache 2.0</div>
        <div className="footer-text"><a href="https://github.com/JacobTheEvans/zen-koan"><FontAwesome name="github" /></a></div>
      </div>
    )
  }
}

export default Footer;
