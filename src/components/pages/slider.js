import React, { Component } from 'react';
import ImageSlider from '../slider-component/ImageSlider';
import { SliderData } from '../slider-component/sliderData';



class Slider extends Component {
  render() {
    return (
      <div className='about-wrapper'>

          <div className='about-conatiner-content'>

            <div className='blog-wrapper'>

              <ImageSlider slides={SliderData} />;

            </div>

          </div>

      </div>
    );
  }
}

export default Slider;
