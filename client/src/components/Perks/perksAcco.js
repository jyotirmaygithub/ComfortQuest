import React from 'react';
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import RadioOutlinedIcon from "@mui/icons-material/RadioOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";

const Perks = ({ selected, handleFormData }) => {
  return (
    <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
      <label
        className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4"
        key="perks"
      >
        <input
          type="checkbox"
          checked={selected.includes('wifi')}
          name="wifi"
          onChange={handleFormData}
        />
       <WifiOutlinedIcon/>

        <span>Wifi</span>
      </label>
      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
        <input
          type="checkbox"
          checked={selected.includes('parking')}
          name="parking"
          onChange={handleFormData}
        />
        <LocalParkingOutlinedIcon/>

        <span>Free parking spot</span>
      </label>
      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
        <input
          type="checkbox"
          checked={selected.includes('tv')}
          name="tv"
          onChange={handleFormData}
        />
        <TvOutlinedIcon/>

        <span>TV</span>
      </label>
      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
        <input
          type="checkbox"
          checked={selected.includes('radio')}
          name="radio"
          onChange={handleFormData}
        />
        <RadioOutlinedIcon/>

        <span>Radio</span>
      </label>
      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
        <input
          type="checkbox"
          checked={selected.includes('pets')}
          name="pets"
          onChange={handleFormData}
        />
        <PetsOutlinedIcon/>

        <span>Pets</span>
      </label>
    </div>
  );
};

export default Perks;
