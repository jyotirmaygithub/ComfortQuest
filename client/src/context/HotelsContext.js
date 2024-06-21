import React, { useContext, createContext, useState, useEffect } from "react";
import { TokenStatusContext } from "./tokenStatus";
import { StateContext } from "./States";

const Hotels = createContext();

export function HotelContextFunc(props) {
  const { getAuthToken } = TokenStatusContext();
  const {selectedImages} = StateContext()
  useEffect(() => {
    handleHotelData();
    handleRetrivingBookingData();
  }, []);
  // state to store array of the total number of hotels.
  const [hotelData, setHotelData] = useState([]);
  const [singleHotel, setSingleHotel] = useState({});
  const [userBooking, setuserBooking] = useState({});

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
          body: JSON.stringify({ id }),
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
      if (Hotels) {
        setHotelData(Hotels.hotels);
      }
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  }

  // Route 3 : Hotel booking.
  async function handleHotelBooking(
    hotelId,
    userEmail,
    hotelPicture,
    hotelName,
    hotelAddress,
    price,
    noOfDays,
    checkIn,
    checkOut,
    userFullName,
    userPhoneNumber,
    userNoOfRooms
  ) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/booking/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": getAuthToken(),
          },
          body: JSON.stringify({
            hotelId,
            userEmail,
            hotelPicture,
            hotelName,
            hotelAddress,
            price,
            noOfDays,
            checkIn,
            checkOut,
            userFullName,
            userPhoneNumber,
            userNoOfRooms,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      else{
        handleRetrivingBookingData()
        return {
          success: true,
        }
      }
    } catch (error) {
      console.error("Error creating user:", error.message);
      return { success: false, message: "Internal Server Error" };
    }
  }

  // Route 4 : To fetch user booking data.
  async function handleRetrivingBookingData() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/retriveData/user-booking-data`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": getAuthToken(),
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const resData = await response.json();
      setuserBooking(resData);
    } catch (error) {
      console.error("Internal Servor Error", error.message);
    }
  }

  // Route 5 : To register a new hotel in the database.
  async function handleRegisterNewhotel(formData) {
    console.log("formadata = ", formData);
    console.log("these are the images  = ",selectedImages)
    const {
      chainName,
      hotelName,
      hotelAddress,
      zipCode,
      cityName,
      stateName,
      countryName,
      hotelUrl,
      totalRooms,
      hotelDescription,
      hotelPhone,
      hotelEmail,
      price,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
    } = formData;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/newHotel/register-hotel`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": getAuthToken(),
          },
          body: JSON.stringify({
            chainName,
            hotelName,
            hotelAddress,
            zipCode,
            cityName,
            stateName,
            countryName,
            hotelUrl,
            totalRooms,
            hotelDescription,
            hotelPhone,
            hotelEmail,
            price,
            photo1,
            photo2,
            photo3,
            photo4,
            photo5,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const resData = await response.json();
      console.log("register hotle data = ", resData);
      // setuserBooking(resData);
      return resData
    } catch (error) {
      console.error("Internal Servor Error", error.message);
    }
  }
  return (
    <Hotels.Provider
      value={{
        hotelData,
        setHotelData,
        handleHotelData,
        handleSingleHotel,
        singleHotel,
        handleHotelBooking,
        handleRetrivingBookingData,
        userBooking,
        handleRegisterNewhotel,
      }}
    >
      {props.children}
    </Hotels.Provider>
  );
}

export function HotelContext() {
  return useContext(Hotels);
}
