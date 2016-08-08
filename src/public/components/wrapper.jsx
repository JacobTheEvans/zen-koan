import React from "react";
import Navbar from "./navbar.jsx";
import About from "./about.jsx";
import Footer from "./footer.jsx";
import Story from "./story.jsx";

var navItems = [
  {"name": "About", "link": "/about"},
  {"name": "Stories", "link": "/stories"}
]

class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar logoText="Zen Koan" navItems={navItems}/>
        <Story />
        <Footer />
      </div>
    )
  }
}

export default Wrapper;
