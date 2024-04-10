import React from "react";
import { HotelContext } from "../context/HotelsContext";
import BookedLayout from "../Layout/BookedLayout";
import { useNavigate } from "react-router-dom";

export default function BookingsPage() {
  const { userBooking } = HotelContext();
  const { userBookedData } = userBooking;
  const navigate = useNavigate();


  function handleClick(){
    navigate(`/`)
  }
  // Conditional rendering logic
  function renderBookings() {
    if (!userBookedData || userBookedData.length === 0) {
    return (
      <div className="flex flex-col justify-start">
        <h1 className="my-6 text-3xl font-semibold">Trips</h1>
        <hr className="border border-gray-300" />
        <h3 className="pt-6 text-2xl font-semibold">No trips booked... yet!</h3>
        <p>Time to dust off your bags and start planning your next adventure</p>
        {/* <Link to="/" className="my-4"> */}
        <div onClick={handleClick} className="flex w-40 justify-center rounded-lg border border-black p-3 text-lg font-semibold hover:bg-gray-50">
          Start Searching
        </div>
        {/* </Link> */}
      </div>
    );
    }
    else {
      return userBookedData.map((bookingData) => (
        <BookedLayout key={bookingData.id} BookingData={bookingData} />
      ));
    }
  }

  // Calling a function to check  for data in the array before rendering it.
  return <div className="grid items-center w-[100vw] h-[100vh] p-10">{renderBookings()}</div>;
}
