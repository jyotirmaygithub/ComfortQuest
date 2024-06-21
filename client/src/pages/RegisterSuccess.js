import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Confetti from 'react-confetti';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CelebrationIcon from '@mui/icons-material/Celebration';
import StarIcon from '@mui/icons-material/Star';

const HotelRegistrationSuccess = () => {
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
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-green-500 to-green-400 p-4 text-white">
      {showConfetti && <Confetti />}
      <div className="relative z-10 max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg">
        {/* Icons section */}
        <div className="flex justify-center items-center space-x-2">
          <CelebrationIcon style={{ fontSize: 50, color: '#34D399' }} />
          <CheckCircleOutlineIcon style={{ fontSize: 60, color: '#34D399' }} />
          <StarIcon style={{ fontSize: 50, color: '#34D399' }} />
        </div>

        {/* Heading */}
        <h1 className="mt-4 text-3xl font-bold text-gray-800">Registration Successful!</h1>

        {/* Message paragraphs */}
        <p className="mt-2 text-lg text-gray-600">
          Your hotel has been successfully registered.
        </p>
        <p className="mt-2 text-lg text-gray-600">
          Thank you for choosing our platform. We're committed to helping you reach more guests and grow your business. 
        </p>
        <p className="mt-2 text-lg text-gray-600">
          If you know other hotel owners who could benefit from our services, please refer them to us. Together, we can create a thriving community of hospitality professionals.
        </p>

        {/* Button */}
        <button
          onClick={handleGoHome}
          className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-green-500 py-3 px-6 text-lg font-semibold text-white shadow-md hover:bg-green-600"
        >
          <HomeOutlinedIcon style={{ fontSize: 24, color:"white" }} />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default HotelRegistrationSuccess;
