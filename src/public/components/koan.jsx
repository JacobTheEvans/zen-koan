import React from "react";
import BackButton from "./back-button.jsx";
import Requests from "../utils/req.jsx";
let requests = new Requests();

class Story extends React.Component {
  constructor() {
    super();
    this.state = {koan: {}};
    this.update = this.update.bind(this);
  }
  update(response) {
    var koanIndex = -1;
    for(let i = 0; i < response.data.length; i++) {
      if(response.data[i].title == this.props.params.id) {
        koanIndex = i;
        this.setState({koan: response.data[koanIndex]});
      }
    }
    if(koanIndex == -1) {
      window.location = "/#/404";
    }
  }
  fail(response) {
    console.log("Failed request to backend", response.status, response.statusText);
  }
  componentDidMount() {
    requests.getKoans().then(this.update, this.fail);
  }
  render() {
    let text = (<p></p>);
    if(this.state.koan.text) {
      text = this.state.koan.text.split("\n").map(function(item) {
        return (<p key={"id:" + item}>{item}</p>);
      });
    }
    return (
      <div className="story-section">
        <div className="story-title">{this.state.koan.title}</div>
        <div className="story-text">{text}</div>
        <div className="button-section">
          <BackButton />
        </div>
      </div>
    )
  }
}

export default Story;
