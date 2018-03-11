import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
        <div className="contianer">
          <div className="row">
            <div className="col-lg-12">
              <div id="header">
              <ul>
                    <li>Raghavi Reddy Poreddy</li>
                    <li><a href="/App/Contact">Contact</a></li>
                    <li><a href="/App/Resume">Resume</a></li>
                    <li><a href="/App/Profile">Home</a></li>
                  </ul></div>
            </div>
          </div>
        </div>)
    }
}

export default Header;