import React, { useContext, createContext, useState, useEffect } from "react";

const Hotels = createContext();

export function HotelContextFunc(props) {
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
      console.log("single hotel Data : ", hotelData.HotelData);
      setSingleHotel(hotelData);
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

  return (
    <Hotels.Provider value={{ hotelData,handleSingleHotel,singleHotel }}>
      {props.children}
    </Hotels.Provider>
  );
}

export function HotelContext() {
  return useContext(Hotels);
}
