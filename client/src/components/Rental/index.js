import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import axios from "axios";

import "./Rental.scss";

import Carousel from "../Carousel/Carousel";
import { lightGreen } from "@material-ui/core/colors";

export default function Rental(props) {
  const [vehicle, setVehicle] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [images, setImages] = useState();
  const [open, setOpen] = useState(false);

  const price = 90.22;

  function daysRented() {
    let days =
      (new Date(endDate).getTime() - new Date(startDate).getTime()) /
      (1000 * 60 * 60 * 24);
    if (!days) {
      return `$${price}`;
    }
    if (days === 0 || days === 1) {
      return `$${price}`;
    }
    if (days < 0) {
      return "Invalid Date Selection";
    }
    return `$${Math.round(price * days)}`;
  }

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/listings/${id}`)
      .then((res) => setVehicle(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    axios
      .get(`/api/images/${id}`)
      .then((res) => setImages(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  // console.log("vehicle:", vehicle);
  // console.log("images", images);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <div className="host-info">
              <h5>HOSTED BY</h5>
              <div className="host">
                <Avatar src="/broken-image.jpg"></Avatar>
                <span>{vehicle.first_name}</span>
              </div>
            </div>
            <div className="description">
              <h5>DESCRIPTION</h5>
              <p>{vehicle.description}</p>
            </div>
            <div className="description">
              <h5>REVIEWS</h5>
              <p>Book this trailer to be the first to review!</p>
            </div>
          </div>
          <div className="right-text">
            <p className="price">${price} per day</p>
            <hr className="horizontal-line"></hr>
            <div className="date-picker">
              <h4 className="date-title">Start Date</h4>
              <TextField
                onChange={(e) => setStartDate(e.target.value)}
                type="date"
                variant="outlined"
                placeholder=""
                defaultValue={startDate}
              />
              <h4 className="date-title">End Date</h4>
              <TextField
                onChange={(e) => setEndDate(e.target.value)}
                type="date"
                variant="outlined"
                placeholder=""
                defaultValue={endDate}
              />
            </div>
            <hr className="horizontal-line"></hr>
            <div className="book-now-button">
              <Button
                color="primary"
                variant="contained"
                onClick={handleClickOpen}
              >
                Book Now
              </Button>
              <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>Complete Your Booking</DialogTitle>
                <hr></hr>
                <DialogContent>
                  {startDate && endDate && (
                    <DialogContentText>
                      This booking will run from {startDate} to {endDate}. If
                      this is not right, please adjust your booking dates:
                    </DialogContentText>
                  )}
                  {(!startDate || !endDate) && (
                    <DialogContentText>
                      Please select booking dates
                    </DialogContentText>
                  )}
                  <TextField
                    helperText="Start Date"
                    onChange={(e) => setStartDate(e.target.value)}
                    type="date"
                    variant="standard"
                    defaultValue={startDate}
                  />
                  <TextField
                    helperText="End Date"
                    onChange={(e) => setEndDate(e.target.value)}
                    type="date"
                    variant="standard"
                    defaultValue={endDate}
                    style={{ margin: "0 15px" }}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClose}
                  >
                    Complete Booking
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div className="total-price">
              {startDate && endDate && <p>Total Price = {daysRented()}</p>}
            </div>

            {/* <p className="price">$90.22</p> */}
            {/* <div>
              <h3>Owned by:</h3>
              <span>{vehicle.first_name}</span>
            </div> */}
          </div>
        </div>
        <div className="photo-carousel">
          <Carousel photo={images} />
        </div>
      </section>
    </>
  );
}
