import React from 'react'
import { useNavigate } from "react-router-dom";
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';

export default function Logo() {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/");
  }
  return (
    <div>
      <div onClick={handleClick} className="flex items-center gap-2 cursor-pointer">
          <HotelOutlinedIcon sx={{ color: '#3B82F6', fontSize: '48px', fontWeight: 'bold' }} />
          <span className="hidden text-2xl font-bold text-blue-500 md:block">
          ComfortQuest
          </span>
        </div>
    </div>
  )
}
