import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="about-section section">
          <div className="section-header">About</div>
          <p>Zen koan is a website to share koans. Koans are stories, dialogues, questions or statements in Zen to provoke "great doubt" and enlighten a Zen Student. The purpose to "solve" a koan is to exhaust the analytic intellect and will, preparing the mind to entertain an appropriate response on intuitive level.</p>
          <p>"These koans, or parables, were translated into English from a book called the Shaseki-shu (Collection of Stone and Sand), written late in the thirteenth century by the Japanese Zen teacher Muju (the "non-dweller"), and from anecdotes of Zen monks taken from various books published in Japan around the turn of the 20th century."—Ashidakim Zen Koans</p>
        </div>
        <div className="sub-section section">
          <div className="section-header">Website</div>
          <p>This website was made by <a href="https://jacobtheevans.com">Jacob Evans</a> with the data taken from <a href="http://deoxy.org/koans">deoxy</a>. The code for this website and scraper used to gather data are available here <a href="https://github.com/JacobTheEvans/zen-koan">github.com/JacobTheEvans/zen-koan</a></p>
        </div>
      </div>
    )
  }

}

export default About;
