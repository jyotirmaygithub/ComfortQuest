import React, { useEffect } from "react";
import { HotelContext } from "../context/HotelsContext";
import BookedLayout from "../Layout/BookedLayout";

export default function BookingsPage() {
  const { userBooking } = HotelContext();
  const { userBookedData } = userBooking;

  return (
    <div className="container">
      {userBookedData ? userBookedData.map((bookingData) => {
        return <BookedLayout BookingData={bookingData} />;
      }) : ""}
    </div>
  );
}
