import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { differenceInDays } from "date-fns";
import { toast } from "react-toastify";
import DatePicker from "./DatePicker";
import MyStyledTextField from "./myStyledTextField";
import { StateContext } from "../context/States";
import { TokenStatusContext } from "../context/tokenStatus";
import { HotelContext } from "../context/HotelsContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const BookingWidget = ({ price, numberOfRooms, Hotel, Address }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { checkIn, checkOut,userDocument } = StateContext();
  const { checkCookie } = TokenStatusContext();
  const { handleHotelBooking } = HotelContext();
  const [bookingData, setBookingData] = useState({
    noOfRooms: 1,
    name: "",
    phone: "",
  });
  console.log("checkout date =", checkOut);
  const [days, setDays] = useState(0);
  const [month, setMonths] = useState(0);
  const [year, setYear] = useState(0);
console.log(userDocument.email)
  // To control the number of dates of booking.
  useEffect(() => {
    if (checkIn && checkOut) {
      setDays(Math.abs(checkOut.$D - checkIn.$D));
      setMonths(Math.abs(checkOut.$M - checkIn.$M));
      setYear(Math.abs(checkOut.$Y - checkIn.$Y));
    }
  }, [checkIn, checkOut]);

  // handle booking form
  const handleBookingData = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };
  async function handleBooking() {
    // User must be signed in to book place
    if (!checkCookie()) {
      toast.error("First Login In");
      navigate("/login");
    }

    // BOOKING DATA VALIDATION
    if (days < 1 && month > 1 && year === 0) {
      return toast.error("Please select valid dates");
    } else if (bookingData.noOfGuests < 1) {
      return toast.error("No. of guests can't be less than 1");
    } else if (bookingData.noOfRooms > 20) {
      return toast.error(`Allowed max. no. of rooms: ${20}`);
    } else if (bookingData.name.trim() === "") {
      return toast.error("Name can't be empty");
    } else if (bookingData.phone.trim() === "") {
      return toast.error("Phone can't be empty");
    }
    returnResponse(handleHotelBooking(id,userDocument.email,Hotel,Address,price,checkIn, checkOut, bookingData.name, bookingData.phone));
  }
  function returnResponse(response){
    if (response.success) {
      toast.success(response.message)
      // navigate('/')
    }
    else{
      toast.error(response.message);
    }
  }
  return (
    <div className="rounded-2xl bg-white p-4 shadow-xl">
      <div className="text-center text-xl">
        Price: <span className="font-semibold">USD - {price}</span> / per night
      </div>
      <div className="mt-4 rounded-2xl border">
        <div className="flex w-full ">
          <DatePicker />
        </div>
        <div className="border-t py-3 px-4">
          <label>Number of Rooms</label>
          <MyStyledTextField
            margin="normal"
            required
            fullWidth
            id="noOfRooms"
            name="noOfRooms"
            value={bookingData.noOfRooms}
            autoComplete="Rooms"
            onChange={handleBookingData}
            autoFocus
          />
        </div>
        <div className="border-t py-3 px-4">
          <MyStyledTextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            onChange={handleBookingData}
            autoFocus
          />
          <MyStyledTextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
            onChange={handleBookingData}
            autoFocus
          />
        </div>
      </div>
      <button onClick={handleBooking} className=" bg-gray-400 mt-4">
        Book this place
        {days > 0 && <span> ₹{days * price}</span>}
      </button>
    </div>
  );
};

export default BookingWidget;
