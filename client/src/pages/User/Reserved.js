import React from "react";
import { HotelContext } from "../../context/HotelsContext";
import BookedLayout from "../../Layout/Reserved";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BookingsPage() {
  const { userBooking } = HotelContext();
  const { userBookedData } = userBooking;
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/`);
  }

  // Conditional rendering logic
  function renderBookings() {
    if (!userBookedData || userBookedData.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-3xl font-semibold">Trips</h1>
          <hr className="border border-gray-300 w-16" />
          <div className="text-center">
            <h3 className="text-2xl font-semibold">No trips booked... yet!</h3>
            <p className="text-gray-600">Time to dust off your bags and start planning your next adventure.</p>
          </div>
          <Button onClick={handleClick} variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
            Start Searching
          </Button>
        </div>
      );
    } else {
      return (
        <div className="grid gap-6">
          {userBookedData.map((bookingData) => (
            <BookedLayout key={bookingData.id} BookingData={bookingData} />
          ))}
        </div>
      );
    }
  }

  // Calling a function to check for data in the array before rendering it.
  return <div className="my-32">{renderBookings()}</div>;
}
