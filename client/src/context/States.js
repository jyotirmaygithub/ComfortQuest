import React, { useContext, createContext, useState } from "react";

const AppStates = createContext();

export function StatesFunction(props) {
    // const [userDocument ,setUserDocument] = useState({})
  return (
    <AppStates.Provider value={{  }}>
      {props.children}
    </AppStates.Provider>
  );
}

export function StateContext() {
  return useContext(AppStates);
}
