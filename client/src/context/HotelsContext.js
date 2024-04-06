import React, { useContext, createContext, useState, useEffect } from "react";
import { TokenStatusContext } from "./tokenStatus";

const Hotels = createContext();

export function HotelContextFunc(props) {
  const { getAuthToken } = TokenStatusContext();
    useEffect(()=>{
        handleHotelData()
    },[])
  // state to store array of the total number of hotels.
  const [hotelData ,setHotelData] = useState([])
  const [singleHotel, setSingleHotel] = useState({})


  // Route 1 : To fetch single hotel data by providing the hotel id.
  async function handleSingleHotel(id) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/retriveData/single-hotel`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body : JSON.stringify({id})
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const hotelData = await response.json();
      setSingleHotel(hotelData.HotelData);
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  }

  // Route 2 : To fetch hotels data.
  async function handleHotelData() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/retriveData/hotels-data`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const Hotels = await response.json();
      if(Hotels){
        setHotelData(Hotels.hotels)
      }
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  }

  // Route 3 : Hotel booking.
  async function  handleHotelBooking(hotelId,userEmail,Hotel,Address,price,checkIn, checkOut, userFullName, userPhoneNumber) {
    console.log("user booking details = ",hotelId,userEmail,Hotel,Address,price,checkIn, checkOut, userFullName, userPhoneNumber)
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/booking/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": getAuthToken(),
          },
          body : JSON.stringify({hotelId,userEmail,Hotel,Address,price,checkIn, checkOut, userFullName, userPhoneNumber})
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return { success: true, message: "Congratulation you have successfully booked the hotel!" };
    } catch (error) {
      console.error("Error creating user:", error.message);
      return { success: false, message: "Internal Server Error" };
    }
  }
  return (
    <Hotels.Provider value={{ hotelData,handleSingleHotel,singleHotel,handleHotelBooking }}>
      {props.children}
    </Hotels.Provider>
  );
}

export function HotelContext() {
  return useContext(Hotels);
}
