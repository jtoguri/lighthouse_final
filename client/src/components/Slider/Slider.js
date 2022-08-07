import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.scss";

export default function Slider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={100}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        renderDotsOutside={true}
      >
        <div className="Flat-Beds">
          <img src="https://texastrailersupply.com/wp-content/uploads/Hdut-01-2.jpg" />
        </div>
        <div className="Compact">
          {" "}
          <img src="https://thumbs.dreamstime.com/b/car-trailer-sea-roof-rack-141315098.jpg" />
        </div>
        <div className="Enclosed">
          {" "}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKoHLjn_j8O0X53lMASO852x4Gte4zwxjF7A&usqp=CAU" />
        </div>
        <div className="MobileHomes">
          {" "}
          <img src="https://images.rvs.com/images/content/TT-Satellite.jpg" />
        </div>
        <div>
          {" "}
          <img src="https://images.rvs.com/images/content/TT-Satellite.jpg" />
        </div>
        <div>
          {" "}
          <img src="https://images.rvs.com/images/content/TT-Satellite.jpg" />
        </div>
        <div>
          {" "}
          <img src="https://images.rvs.com/images/content/TT-Satellite.jpg" />
        </div>
        <div>
          {" "}
          <img src="https://images.rvs.com/images/content/TT-Satellite.jpg"  alt="Hello"/>
        </div>
      </Carousel>
      ;
    </>
  );
}
