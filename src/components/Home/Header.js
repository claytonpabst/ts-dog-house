import React, { Component } from 'react';

import './Header.css'

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header-content-wrapper">
          <img src="https://res.cloudinary.com/linkbranch/image/upload/v1539109878/Screen_Shot_2018-10-09_at_12.30.43_PM.png"/>
          {/* <p>Gallery</p> */}
        </div>
      </div>
    );
  }
}


export default Header;