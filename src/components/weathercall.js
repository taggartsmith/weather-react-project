import React, { Component } from 'react';

import Weatherfunction from './weather';

class Weathercall extends Component {
  render() {
    return (
      <div className='weather-wrapper'>

          <div className='weather-content'>
                <div className='weather-me'>
                    <Weatherfunction/>
                </div>
            </div>

          <div className='weather-conatiner-content'>

          </div>

      </div>
    );
  }
}

export default Weathercall;
