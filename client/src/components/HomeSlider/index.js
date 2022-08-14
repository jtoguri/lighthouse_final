import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HomeSlider() {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
return (
  <Carousel 
    responsive={responsive}
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    infinite={true}
    itemClass="carousel-item-padding-40-px"
    centerMode={true}
    containerClass="carousel-container"
  >
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
  </Carousel>
)

}
