import React, { Component } from 'react';

import './Home.css';

import Header from './Header.js';


class Home extends Component {

  render() {
    return (
      <div className="home">
        <Header/>
        <div className="home-content-wrapper">
          <img src="https://res.cloudinary.com/linkbranch/image/upload/v1539109756/Ts_Dog_House_Logo_vert_bk.png"/>
          <div>
            <h2>Coming Soon</h2>
            <p>Contact Talmage Smedley for more information.</p>
            <h3>Ph: (801) 510-3052</h3>
          </div>
        </div>
        <div className="footer">Ts Dog House {new Date().getFullYear()}</div>
      </div>
    );
  }
}


export default Home;