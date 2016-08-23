import React from "react";
import KoanLink from "./koan-link.jsx";
import Requests from "../utils/req.jsx";
let requests = new Requests();

class KoanList extends React.Component {
  constructor() {
    super();
    this.state = {koans: []};
    this.update = this.update.bind(this);
  }
  update(response) {
    this.setState({koans: response.data});
  }
  fail(response) {
    console.log("Failed request to backend", response.status, response.statusText);
  }
  componentDidMount() {
    requests.getKoans().then(this.update, this.fail);
  }
  render() {
    let koans = this.state.koans.map(function(item) {
          return (<KoanLink key={"id: " + item.title} koan={item}/>);
    });
    return (
      <div className="koans-section">
        {koans}
      </div>
    )
  }
}

export default KoanList;
