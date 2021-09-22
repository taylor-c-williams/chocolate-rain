import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className="sub-footer">
          <div className="repeating-img"></div>
          <div className="vanessa"></div>
        </section>
        <footer>
          <section class='foot-image'>
            <div>
            </div>
          </section>
          <section class='footer-text'>
            <p>Delicious 2013© • All Rights Reserved.</p>
            <p>Proudly published with Ghost.</p>
          </section>
        </footer>   
      </div>
    );
  }
}
