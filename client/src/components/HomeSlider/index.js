import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HomeSlider({ listings }) {
  console.log(listings)
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
    showDots={false}
    responsive={responsive}
    infinite={true}
    itemClass="carousel-item-padding-40-px"
    centerMode={false}
    partialVisible={false}
    containerClass="carousel-container"
  >
    {listings.map(listing => {
      return (
        <div>
          <img src={listing.photo} />
          <p>Hosted by: {listing.first_name}</p>
        </div>
      );
    })}
  </Carousel>
)

}
