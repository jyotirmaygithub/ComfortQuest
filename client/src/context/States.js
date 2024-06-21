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
  // state to hold the user seleted images for the register purpuse.
  const [selectedImages, setSelectedImages] = useState([]);
  const [editLoader, setEditLoader] = useState(false);

  return (
    <AppStates.Provider
      value={{
        userDocument,
        setUserDocument,
        checkIn,
        SetCheckIn,
        checkOut,
        setCheckOut,
        selectedImages,
        setSelectedImages,
        editLoader,
        setEditLoader,
      }}
    >
      {props.children}
    </AppStates.Provider>
  );
}

export function StateContext() {
  return useContext(AppStates);
}
