import React, { Component } from 'react';

import Weatherfunction from './weather';

class Weathercall extends Component {
  render() {
    return (
      <div className='weather-wrapper'>
        <Weatherfunction/>
      </div>
    );
  }
}

export default Weathercall;
