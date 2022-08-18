import React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Cityslider = () => {
  return (
    <Carousel
      className="container"
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={false}
      infinite={true}
      itemClass="carousel-item-padding-40-px"
      centerMode={false}
      partialVisible={false}
      containerClass="carousel-container"
    >
      <div>
        <img
          alt="Ottawa"
          placeholder="Montreal"
          src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png"
        />
        <p>Ottawa</p>
      </div>
      <div>
        <img
          alt="calgary"
          src="//resources.turo.com/f/81934/240x240/bbe188de38/illo_city_honolulu-2x.png"
        />
        <p>Calgary</p>
      </div>
      <div>
        <img
          alt="toronto"
          src="//resources.turo.com/f/81934/240x240/87ab56dd05/illo_city_toronto-2x.png"
        />
        <p>Toronto</p>
      </div>
      <div>
        <img
          alt="montreal"
          src="//resources.turo.com/f/81934/330x330/01521966f4/montreal-icon-v02-2x.png"
        />
        <p>Montreal</p>
      </div>
      <div>
        <img
          alt="vancouver"
          src="//resources.turo.com/f/81934/330x330/b81d31d6f2/vancouver-black-2x.png"
        />
        <p>Vancouver</p>
      </div>
      <div>
        <img
          alt="Quebec city"
          src="//resources.turo.com/f/81934/240x240/b919d90a34/illo_city_chicago-2x.png"
        />
        <p>Quebec City</p>
      </div>
      <div>
        <img
          alt="winnepeg"
          src="//resources.turo.com/f/81934/240x240/184058bb96/illo_city_lasvegas-2x.png"
        />
        <p>Winterpeg</p>
      </div>
    </Carousel>
  );
};

export default Cityslider;
