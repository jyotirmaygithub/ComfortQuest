import React from "react";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import RadioOutlinedIcon from "@mui/icons-material/RadioOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

const PerksWidget = ({ numOfFloors }) => {
  return (
    <div className="mt-4">
      <hr className="mb-5 border" />
      <p className="text-2xl font-semibold">What this place offers</p>

      <div className="mt-4 grid flex-col gap-4 lg:grid-cols-2 lg:justify-items-stretch lg:gap-4">
        <div className="flex gap-4">
          <WifiOutlinedIcon className="h-6 w-6" />
          <span>Wifi</span>
        </div>
        <div className="flex gap-4">
          <TvOutlinedIcon className="h-6 w-6" />
          <span>TV</span>
        </div>
        <div className="flex gap-4">
          <LocalParkingOutlinedIcon className="h-6 w-6" />
          <span>Free parking spot</span>
        </div>
        <div className="flex gap-4">
          <RadioOutlinedIcon className="h-6 w-6" />
          <span>Radio</span>
        </div>
        <div className="flex gap-4">
          <PetsOutlinedIcon className="h-6 w-6" />
          {/* <span className={`${perks?.includes('pets') ? '' : 'line-through'}`}> */}
          <span>Pets</span>
        </div>
        {numOfFloors ? (
          <div className="flex gap-4">
            <BusinessOutlinedIcon className="h-6 w-6" />
            <span>Number of floors : {numOfFloors}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PerksWidget;
