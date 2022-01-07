import React, { Component } from 'react';

import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <div className='header'>
          <div className='header-name'>
            
            
          </div>
          
          <div className="header-links">
            <div className="nav-link-wrapper">
                <NavLink exact to="/" activeClassName="nav-link-active">
                    Home
                </NavLink>
            </div>


            <div className="nav-link-wrapper">
                <NavLink exact to="/pictures" activeClassName="nav-link-active">
                    Pictures
                </NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink to="/weather" activeClassName="nav-link-active">
                    Weather
                </NavLink>
            </div>

          </div>

      </div>
    );
  }
}

export default Header;
