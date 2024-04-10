import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BookedDates from "../components/Date/BookedDates";
import { useNavigate } from "react-router-dom";
import Warning from "../components/PopUps/Warning";

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
  function handleDelete() {}
  return (
    <>
      <Card
        key={hotel_id}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <CardMedia
          component="img"
          sx={{ width: "auto", objectFit: "contain" }}
          image={hotel_picture[0]}
          alt="Hotel Image"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {hotel_name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {address}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Total Days of Stay: {user_staying_days}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Total Number of Rooms: {user_total_rooms}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Total Price: {price}
            </Typography>
            <BookedDates CheckIn={checkIn} CheckOut={checkOut} />
            {/* Buttons */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button
                onClick={handleViewHotel}
                variant="contained"
                color="primary"
              >
                View Hotel
              </Button>
              {/* button to delete the booking. */}
              <Warning />
            </Box>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
