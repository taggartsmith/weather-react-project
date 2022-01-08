import React, { useState } from 'react';
import { SliderData } from './sliderData';


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <button className='left-arrow' onClick={prevSlide}>Back</button>
      <button className='right-arrow' onClick={nextSlide}>Next</button>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='Image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;