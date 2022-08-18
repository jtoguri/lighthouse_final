import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate, useHistory } from "react-router-dom";
import { TokenContext } from "../UserContext";

export default function Bookings() {
  const [booking, setBooking] = useState();

  const ref = useRef(useContext(TokenContext));

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/bookings`, {
        headers: { Authorization: `token ${ref.current.accessToken}` },
      })
      .then((res) => setBooking(res.data))
      .catch((error) => console.log(error));
  }, []);

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "30vh",
    width: "80vw",
    margin: "50px auto",
    backgroundColor: "#00000005",
    overflow: "initial",
  };

  console.log(booking);

  if (booking === undefined || Object.keys(booking).length === 0) {
    return <></>;
  }

  const allBookings = booking.map((bookings) => {
    return (
      <Card style={cardStyle}>
        <CardContent>
          <Typography variant="h5" style={{ margin: "5px 20px" }}>
            <strong>Booking # {bookings.id}</strong>
          </Typography>
          <Typography variant="subtitle1" style={{ margin: "0 20px" }}>
            <strong>Host Name:</strong> {bookings.first_name}{" "}
            {bookings.last_name}
          </Typography>
          <hr style={{ width: "full" }}></hr>
          <Typography variant="h6" style={{ margin: "20px" }}>
            <strong>Vehicle Booked: </strong>
            {bookings.year} {bookings.make} {bookings.model}
          </Typography>
          <Typography variant="body2" style={{ margin: "20px" }}>
            <strong>DATES: </strong>
            {bookings.start_date.slice(0, -14)} -{" "}
            {bookings.end_date.slice(0, -14)}
          </Typography>
          <Typography variant="body2" style={{ margin: "20px" }}>
            <strong>PRICE: </strong>
            {bookings.total_price}
          </Typography>
        </CardContent>
        <CardActions style={{ alignSelf: "flex-end", margin: "20px" }}>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={() =>
              axios.delete(`/api/bookings/${bookings.id}`).then((res) => {
                navigate(-1);
              })
            }
          >
            cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => navigate("/chat")}
          >
            contact
          </Button>
        </CardActions>
      </Card>
    );
  });

  return (
    <Box>
      <Typography variant="h5" align="center" style={{ margin: "20px" }}>
        MY BOOKINGS
      </Typography>
      {booking && <div>{allBookings}</div>}
    </Box>
  );
}
