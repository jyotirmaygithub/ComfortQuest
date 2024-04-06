import React, { useContext, createContext, useState } from "react";
import dayjs from "dayjs";

const AppStates = createContext();

export function StatesFunction(props) {
  // To have current date.
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();
  // state to store user document from the database.
  const [userDocument, setUserDocument] = useState({});
  const [checkIn, SetCheckIn] = useState(dayjs(dateString));
  const [checkOut, setCheckOut] = useState(dayjs(dateString));

  return (
    <AppStates.Provider
      value={{ userDocument, setUserDocument,checkIn,SetCheckIn,checkOut,setCheckOut }}
    >
      {props.children}
    </AppStates.Provider>
  );
}

export function StateContext() {
  return useContext(AppStates);
}
