import React from "react";
import BackButton from "./back-button.jsx";

class Page404 extends React.Component {
  render() {
    return (
      <div className="not-found-section section">
          <div className="section-header">You step in the stream,<br/>But the water has moved on.<br/>This page is not here.  </div>
          <div className="button-section">
            <BackButton />
          </div>
      </div>
    )
  }
}

export default Page404;
