import * as React from "react"
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BookedDates from "../components/Date/BookedDates";
import { useNavigate } from "react-router-dom";
import  Delete  from "../components/PopUps/Warning";

export default function MediaControlCard(props) {
  const navigate = useNavigate();
  const {
    hotel_id,
    hotel_picture,
    hotel_name,
    address,
    user_staying_days,
    user_total_rooms,
    checkIn,
    checkOut,
    price,
  } = props.BookingData;

  function handleViewHotel() {
    navigate(`/hotel/${hotel_id}`);
  }

  // Functionality for deleting the booking can be added here

  return (
    <Box maxWidth="600px" mx="auto">
      <Card sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardMedia
          component="img"
          sx={{ width: 200, objectFit: "none" }}
          image={hotel_picture[0]}
          alt="Hotel Image"
        />
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              {hotel_name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {address}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Total Days of Stay: {user_staying_days}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Total Number of Rooms: {user_total_rooms}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Total Price: {price}
            </Typography>
            <BookedDates CheckIn={checkIn} CheckOut={checkOut} />
          </CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-around", p: 2 }}>
            <Button onClick={handleViewHotel} variant="contained" color="primary">
              View Hotel
            </Button>
           <Delete/>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
