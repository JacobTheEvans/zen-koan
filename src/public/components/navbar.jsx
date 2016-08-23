import React from "react";
import FontAwesome from "react-fontawesome";
import {Link} from "react-router";

class Navbar extends React.Component {
  toggle() {
    document.getElementById("dropDown").classList.toggle("show");
    window.onclick = function(event) {
      if (!event.target.matches(".dropbtn")) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }
  render() {
    let navLinks = this.props.navItems.map(function(item) {
      return (
      <li key={item.name} className="nav-item"><Link className="nav-link" to={item.link}>{item.name}</Link></li>
      )
    });
    let navMLinks = this.props.navItems.map(function(item) {
      return (
        <Link key={item.name + "m"} to={item.link}>{item.name}</Link>
      )
    });
    return (
      <div className="navbar">
        <div className="logo-image-cont"><img src="/images/logo.png" className="logo-image" /></div>
        <div className="logo-text-cont"><div className="logo-text">{this.props.logoText}</div></div>
        <div className="nav-link-bar">
          <ul className="nav-links l-only">
            {navLinks}
          </ul>
          <div className="dropdown m-only">
            <button onClick={this.toggle} className="dropbtn"><FontAwesome name="bars" /></button>
            <div id="dropDown" className="dropdown-content">
              {navMLinks}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
