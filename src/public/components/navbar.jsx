import React from "react";

class Navbar extends React.Component {
  render() {
    var navLinks = this.props.navItems.map(function(item) {
      return (
      <li key={item.name} className="nav-item"><a className="nav-link" href={item.link}>{item.name}</a></li>
      )
    });
    return (
      <div className="navbar">
        <div className="logo-image-cont"><img src="/images/logo.png" className="logo-image" /></div>
        <div className="logo-text-cont"><div className="logo-text">{this.props.logoText}</div></div>
        <div className="nav-link-bar">
          <ul className="nav-links">
            {navLinks}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
