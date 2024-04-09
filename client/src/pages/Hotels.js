import React from "react";
import HotelLayout from "../Layout/hotelLayout";
import { HotelContext } from "../context/HotelsContext";

export default function Hotels() {
  const { hotelData } = HotelContext();
  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
      {hotelData
        ? hotelData.map((data,index) => {
            return <HotelLayout HotelData={data} key={index} />;
          })
        : ""}
    </div>
  );
}
