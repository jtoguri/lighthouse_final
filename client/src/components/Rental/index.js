import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField } from "@material-ui/core";
import axios from "axios";

import "./Rental.scss";

import Carousel from "../Carousel/Carousel";

export default function Rental(props) {
  const [vehicle, setVehicle] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/listings/${id}`)
      .then((res) => setVehicle(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  console.log("vehicle:", vehicle);

  if (vehicle === undefined) {
    return <></>;
  }
  return (
    <>
      <section className="main">
        <div className="text-container">
          <div className="left-text">
            <div className="title">
              <h1 className="main-title">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              {vehicle.vin.length > 5 && <h2 className="renter">{}</h2>}
            </div>
            <p className="description">{vehicle.description}</p>
          </div>
          <div className="right-text">
            <p className="price">$90.22</p>
            <div className="date-picker">
              <h4 className="date-title">Start Date</h4>
              <TextField type="date" variant="outlined" placeholder="" />
              <h4 className="date-title">End Date</h4>

              <TextField type="date" variant="outlined" placeholder="" />
            </div>
          </div>
        </div>
        <div className="middle line"></div>
        <div className="photo-carousel">
          <Carousel photo={vehicle.photo} />
          {/* <img src={vehicle.photo}></img> */}
        </div>
      </section>
    </>
  );
}
