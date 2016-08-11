import React from "react";
import BackButton from "./back-button.jsx";

class Story extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="story-section">
        <div className="story-title">Sleeping in the Daytime</div>
        <p>The master Soyen Shaku passed from this world when he was sixty-one years of age. Fulfilling his life's work, he left a great teaching, far richer than that of most Zen masters. His pupils used to sleep in the daytime during midsummer, and while he overlooked this he himself never wasted a minute.</p>
        <p>When he was but twelve years old he was already studying Tendai philosophical speculation. One summer day the air had been so sultry that little Soyen stretched his legs and went to sleep while his teacher was away.</p>
        <p>Three hours passed when, suddenly waking, he heard his master enter, but it was too late. There he lay, sprawled across the doorway.</p>
        <p>"I beg your pardon, I beg your pardon," his teacher whispered, stepping carefully over Soyen's body as if it were that of some distinguished guest. After this, Soyen never slept again in the afternoon.</p>
        <div className="button-section">
          <BackButton />
        </div>
      </div>
    )
  }
}

export default Story;
