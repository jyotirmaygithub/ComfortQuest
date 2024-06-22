import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { HotelContext } from "../../context/HotelsContext";

export default function SearchBar () {
  const { hotelData, setHotelData } = HotelContext();
  const [searchText, setSearchText] = useState("");

  function onchange(value) {
    setSearchText(value.target.value);
  }

  function handleSearch() {
    // Filter hotels based on search text
    const filtered = hotelData.filter(hotel =>
      hotel.hotel_name.toLowerCase().includes(searchText)
    );
    // i dont why i am facing an error here in this line
    setHotelData(filtered)
  }

  return (
    <div className="flex w-4/6 overflow-hidden rounded-full border border-gray-400 bg-gray-300 shadow-sm hover:shadow-lg md:w-1/2">
      <div className="grow">
        <input
          type="search"
          placeholder="Where you want to go?"
          className="h-full w-full border-none py-2 px-4 text-sm focus:outline-none md:text-lg"
          onChange={onchange}
        />
      </div>
      <div className="bg-blue flex cursor-pointer items-center bg-blue-400 hover:bg-blue-500 text-white">
        <button
          className="flex rounded-r-full bg-primary py-2 px-4 md:p-2"
          onClick={handleSearch}
        >
          <SearchIcon sx={{ color: "white" }} />
          <span className="ml-1 hidden md:block">Search</span>
        </button>
      </div>
    </div>
  );
};
