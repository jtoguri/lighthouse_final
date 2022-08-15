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
import { useContext } from "react";

export default function Bookings() {
  const fakeBookings = [
    {
      owner_id: 1,
      renter_id: "Jane Grusom",
      vehicle_id: 1,
      start_date: "August 1/2022",
      end_date: "September 20/2022",
    },
    {
      owner_id: 2,
      renter_id: "Little Nick",
      vehicle_id: 2,
      start_date: "August 1/2022",
      end_date: "September 20/2022",
    },
    {
      owner_id: 3,
      renter_id: "Another guy",
      vehicle_id: 3,
      start_date: "August 1/2022",
      end_date: "September 20/2022",
    },
  ];

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

  const allBookings = fakeBookings.map((booking) => {
    return (
      <Card style={cardStyle}>
        <CardContent>
          <Typography variant="h6" style={{ margin: "20px" }}>
            Booking #: {booking.owner_id}
          </Typography>
          <Typography variant="subtitle2" style={{ margin: "20px" }}>
            Host Name: {booking.renter_id}
          </Typography>
          <Typography variant="body1" style={{ margin: "20px" }}>
            {booking.vehicle_id}
          </Typography>
          <Typography variant="body1" style={{ margin: "20px" }}>
            {booking.start_date} - {booking.end_date}
          </Typography>
        </CardContent>
        <CardActions style={{ alignSelf: "flex-end", margin: "20px" }}>
          <Button variant="outlined" size="small" color="secondary">
            cancel
          </Button>
          <Button variant="contained" size="small" color="primary">
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
      <div>{allBookings}</div>
    </Box>
  );
}
