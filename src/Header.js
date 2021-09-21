import React, { Component } from 'react';
import ButtonList from './ButtonList.js';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <div className="main-logo">
              <img src="logo.png" alt="fork and knife logo" />
            </div>
            <div className="logo-text">
              <h1>Delicious</h1>
                            The best food blog ever.
            </div>
          </div>
          { <ButtonList /> }

          <div className="border">
            <hr />
          </div>
          <section className="blog-title">
            <h1> Chocolate</h1>
          </section>
                    posted on a day
          <section className="print">
            <img src="print-icon.png" height="10px" width="10px" alt="print icon" /> PRINT
          </section>

        </header>
      </div>
    );
  }
}
