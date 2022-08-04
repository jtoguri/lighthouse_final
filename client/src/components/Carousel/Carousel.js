import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "./Carousel.scss";

export default function Carousel(props) {
  const image = props;
  console.log("props:", props.photo);

  const testImages = [
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
      image: "https://dealer-cdn.com/media/premier/Gator/Utility/DSC_0041.jpg",
    },
  ];

  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${testImages[currImg].image})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center"></div>
        <div
          className="right"
          onClick={() => {
            currImg < testImages.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}
