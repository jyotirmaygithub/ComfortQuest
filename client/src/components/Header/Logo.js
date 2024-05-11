import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/");
  }
  return (
    <div>
      <div onClick={handleClick} className="flex items-center gap-1 cursor-pointer">
          <img
            className="h-8 w-8 md:h-10 md:w-10"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
            alt=""
          />

          <span className="hidden text-2xl font-bold text-red-500 md:block">
            airbnb
          </span>
        </div>
    </div>
  )
}
