import React from "react";
import Navbar from "./navbar.jsx";
import About from "./about.jsx";
import Footer from "./footer.jsx";

var navItems = [
  {"name": "About", "link": "/"},
  {"name": "Koans", "link": "/koans"}
]

class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar logoText="Zen Koan" navItems={navItems}/>
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Wrapper;
