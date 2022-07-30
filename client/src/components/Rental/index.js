import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Carousel } from "react-carousel-minimal";

import "./Rental.scss";

export default function Rental() {
  const vehicle = {
    vin: "1FDKF37G3TEB14640",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    license_plate: "HWD 5439",
    make: "Black Widow",
    model: "1500lb Capacity Aluminmum",
    year: "2014",
    images: [
      {
        image:
          "https://www.equipmentsearch.com/uploadedimages/8819/18293575_1.jpg",
      },
      {
        image:
          "https://cdn.dealerspike.com/imglib/v1/300x225/imglib/Assets/Inventory/CB/FC/CBFC2334-1205-4B8C-A8D9-D65D506FCB1D.jpg",
      },
      {
        image:
          "https://cdnmedia.endeavorsuite.com/images/organizations/16bd01ff-79cc-40c1-8e58-9be0d8a091b5/inventory/10851850/Weberlane%20EC1272.png",
      },
      {
        image:
          "https://cdn.dealerspike.com/imglib/v1/300x225/imglib/Assets/Inventory/4D/32/4D323CC5-3280-4CD4-965A-10548DBC1E7A.jpg",
      },
      {
        image:
          "https://dealer-cdn.com/media/premier/Gator/Utility/DSC_0041.jpg",
      },
    ],
  };

  const { user, setUser } = useContext(UserContext);

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <>
      <section className="main">
        <div className="right-info">
          <div className="title">
            <h1 className="main-title">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>
            {vehicle.vin.length > 5 && (
              <h2 className="renter">{vehicle.vin}</h2>
            )}
          </div>
          <p className="description">{vehicle.description}</p>
        </div>
        <div className="middle line"></div>
        <div className="left-pictures">
          <Carousel
            data={vehicle.images}
            time={10000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
            }}
          />
        </div>
      </section>
    </>
  );
}
