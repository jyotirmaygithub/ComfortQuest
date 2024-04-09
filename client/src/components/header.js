import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./searchBar";
import { useNavigate } from "react-router-dom";
import Popover from "./pop-up";
import Drawer from "./Drawer";

export default function Header() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  return (
    <header
      className={`fixed top-0 z-10 flex w-screen justify-center bg-white py-4 `}
    >
      <div className={`flex w-screen max-w-screen-xl justify-evenly`}>
        <a href="/" className="flex items-center gap-1">
          <img
            className="h-8 w-8 md:h-10 md:w-10"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
            alt=""
          />

          <span className="hidden text-2xl font-bold text-red-500 md:block">
            airbnb
          </span>
        </a>
        <SearchBar />
        <div
          // onClick={handleClick}
          //   to={user ? '/account' : '/login'}
          className="w-50 flex h-full justify-center items-center gap-2 rounded-full border-gray-300 py-1 px-2 md:border"
        >
          <MenuIcon />
          <div className="h-9">
            <Drawer />
          </div>
        </div>
      </div>
    </header>
  );
}
