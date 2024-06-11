import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Confetti from 'react-confetti';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CelebrationIcon from '@mui/icons-material/Celebration';
import StarIcon from '@mui/icons-material/Star';

const BookingSuccess = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-pink-400 p-4 text-white">
      {showConfetti && <Confetti />}
      <div className="relative z-10 max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="flex justify-center items-center space-x-2">
          <CelebrationIcon style={{ fontSize: 50, color: '#ec4899' }} />
          <CheckCircleOutlineIcon style={{ fontSize: 60, color: '#ec4899' }} />
          <StarIcon style={{ fontSize: 50, color: '#ec4899' }} />
        </div>
        <h1 className="mt-4 text-3xl font-bold text-gray-800">Booking Successful!</h1>
        <p className="mt-2 text-lg text-gray-600">
          Your booking has been confirmed.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-pink-500 py-3 px-6 text-lg font-semibold text-white shadow-md hover:bg-pink-600"
        >
          <HomeOutlinedIcon />
          See more hotels
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
