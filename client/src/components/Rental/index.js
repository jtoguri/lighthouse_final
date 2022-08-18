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
  Typography,
  TextareaAutosize,
} from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Rental.scss";

import Carousel from "../Carousel/Carousel";

export default function Rental(props) {
  const [vehicle, setVehicle] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [images, setImages] = useState();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const price = 90.22;

  const days =
    (new Date(endDate).getTime() - new Date(startDate).getTime()) /
    (1000 * 60 * 60 * 24);

  function daysRented() {
    if (!days) {
      return `$${price}`;
    }
    if (days === 0 || days === 1) {
      return `$${price}`;
    }
    if (days < 0) {
      return "Invalid Date Selection";
    }
    return `$${Math.round(price * days * 100) / 100}`;
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

  // console.log("vehicle:", vehicle.owner_id);
  // console.log("images", images);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    const bookingData = {
      owner_id: vehicle.owner_id,
      renter_id: "1",
      vehicle_id: vehicle.id,
      start_date: startDate,
      end_date: endDate,
      total_price: daysRented(),
    };
    console.log("loading");
    await axios.post("/api/booking", bookingData);
    navigate("/bookings");
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
            <div className="total-price">
              {startDate && endDate && (
                <p>
                  Total Price for {days} days: {daysRented()}
                </p>
              )}
            </div>
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
              <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle
                  style={{
                    color: "white",
                    backgroundColor: "#303f9f",
                  }}
                >
                  Complete Your Booking
                </DialogTitle>
                <DialogContent
                  style={{ display: "flex", flexDirection: "column" }}
                  dividers
                >
                  <Typography style={{ margin: "2px 0" }}>
                    <strong>Owner:</strong> {vehicle.first_name}
                  </Typography>
                  <Typography style={{ margin: "2px 0" }}>
                    <strong>Email:</strong> {vehicle.email}
                  </Typography>
                  <Typography style={{ margin: "2px 0 10px 0" }}>
                    <strong>Vehicle Booked:</strong> {vehicle.year}{" "}
                    {vehicle.make} {vehicle.model}
                  </Typography>
                  {startDate && endDate && (
                    <DialogContentText style={{ margin: "5px 0 10px 0" }}>
                      This booking will run from <strong>{startDate}</strong> to{" "}
                      <strong>{endDate}</strong>. If this is incorrect, please
                      adjust your booking dates:
                    </DialogContentText>
                  )}
                  {(!startDate || !endDate) && (
                    <DialogContentText style={{ margin: "5px 0 10px 0" }}>
                      Please select booking dates
                    </DialogContentText>
                  )}
                  <TextField
                    helperText="Start Date"
                    onChange={(e) => setStartDate(e.target.value)}
                    type="date"
                    variant="standard"
                    defaultValue={startDate}
                    style={{ maxWidth: "40%" }}
                  />
                  <TextField
                    helperText="End Date"
                    onChange={(e) => setEndDate(e.target.value)}
                    type="date"
                    variant="standard"
                    defaultValue={endDate}
                    style={{ maxWidth: "40%" }}
                  />
                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Additional Information"
                    style={{ width: 400, margin: "20px 0" }}
                    minRows={6}
                  />
                  <DialogContentText
                    style={{
                      display: "flex",
                      alignSelf: "flex-end",
                      fontWeight: "bold",
                      fontSize: "1.2em",
                      color: "black",
                    }}
                  >
                    <u>Price: {daysRented()}</u>
                  </DialogContentText>
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
                    onClick={handleBooking}
                  >
                    Complete Booking
                  </Button>
                </DialogActions>
              </Dialog>
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
