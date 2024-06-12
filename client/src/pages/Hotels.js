import React from "react";
import HotelLayout from "../Layout/Hotel";
import { HotelContext } from "../context/HotelsContext";
import BigCircle from "../components/progress/Bigcircle"; // Assuming this is the correct path

export default function Hotels() {
  const { hotelData } = HotelContext();
  return (
    <>
      {hotelData.length === 0 ? (
        <BigCircle color="black" /> // Correct JSX syntax for component rendering
      ) : (
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
          {hotelData && hotelData.map((data, index) => (
            <HotelLayout HotelData={data} key={index} />
          ))}
        </div>
      )}
    </>
  );
}
