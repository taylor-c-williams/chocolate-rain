import React, { Component } from 'react';

export default class ButtonList extends Component {
  render() {
    return (
      <div>
        <div className="ButtonList">
          <img className="facebook-logo" src="fb-icon.png" alt="facebook icon" />
          <img className="twitter-logo" src="twit-icon.png" alt ="twitter logo"/>
          <img className="google-logo" src="gp-icon.png" alt="google logo" />
          <img className="insta-logo" src="insta-icon.png" alt="instagram logo" />
          <img className="flickr-logo" src="flic-icon.png" alt ="flickr logo"/>
          <img className="pinterest-logo" src="pint-icon.png" alt="pintrest logo" />
          <img className="rss-logo" src="rss-icon.png" alt="rss icon"/>
          <img className="email-logo" src="mail-icon.png" alt ="email icon"/>
        </div>
      </div>
    );
  }
}
