import React, { useEffect, useState } from 'react';
import AddressLink from '../components/AdressLink';
import BookingDetails from '../components/BookingDetails';
import PlaceGallery from '../components/ImageGallery';
import PerksWidget from '../components/Perks';
import {HotelContext} from "../context/HotelsContext"
import { useParams } from 'react-router-dom';

const PlacePage = () => {
  const {id} = useParams();
  const {singleHotel,handleSingleHotel} = HotelContext()
  useEffect(()=>{
    handleSingleHotel(id)
  },[])
  console.log("a hotel = ",singleHotel)
  const { hotel_name,overview,numberrooms,numberfloor,perks,rates_from ,url, addressline1,photo1,photo2,photo3,photo4,photo5 }  = singleHotel
  console.log("rates = ", rates_from)
  return (
    <div className="mt-4 overflow-x-hidden px-8 pt-20 ">
      <h1 className="text-3xl">{hotel_name}</h1>

      <AddressLink placeAddress={addressline1} />
      <PlaceGallery picture1={photo1} picture2={photo2} picture3={photo3} picture4={photo4} picture5={photo5} />

      <div className="mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
        <div className="">
          <div className="my-4 ">
            <h2 className="text-2xl font-semibold">Description</h2>
            {overview}
          </div>
          Max number of Rooms: {numberrooms}
          <PerksWidget perks={perks} numOfFloors={numberfloor} />
        </div>
        <div>
          <BookingDetails price={rates_from} numberOfRooms={numberrooms} Hotel={hotel_name} Address={addressline1} />
        </div>
      </div>
      <div className="-mx-8 border-t bg-white px-8 py-8">
        <div>
          <h2 className="mt-4 text-2xl font-semibold">For Extra Info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm leading-5 text-blue-400">
          {url}
        </div>
      </div>
    </div>
  );
};

export default PlacePage;
