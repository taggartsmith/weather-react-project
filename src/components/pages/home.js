import React, { Component } from 'react';

import background from '../../../static/assets/images/about-me.jpg';


class Home extends Component {
  render() {
    return (
      <div className='home-wrapper'>

          <div className='home-content'>
                <div
                    className="img"
                    style={{
                        backgroundImage: `url(${background})`
                    }}
                />
                <div className='home-text'>
                    text this works
                </div>
            </div>

          <div className='home-conatiner-content'>

          </div>

      </div>
    );
  }
}

export default Home;