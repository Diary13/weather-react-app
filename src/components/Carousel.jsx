// Carousel.js

import { useState } from 'react';
import '../styles/carousel.scss';

const Carousel = ({ children: images }) => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div className="carousel">
      {/* <button onClick={prevSlide}>preview</button> */}
      <div>{images}</div>
      {/* <button onClick={nextSlide}>next</button> */}
    </div>
  );
};

export default Carousel;