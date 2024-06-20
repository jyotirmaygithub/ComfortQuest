import React from "react";
import Logo from "../components/Header/Logo";
import SearchBar from "../components/Header/Search";
import Avatar from "../components/Header/Toggle";
import { useLocation } from 'react-router-dom';

export default function HeaderLayout() {
  const location = useLocation();
  const {pathname} = location

  return (
    <header
      className={`fixed top-0 z-10 flex w-screen justify-center bg-white py-4 `}
    >
      <div className={`flex w-screen max-w-screen-xl justify-between items-center`}>
        <Logo />
       {pathname === "/" &&  <SearchBar />}
        <Avatar />
      </div>
    </header>
  );
}
