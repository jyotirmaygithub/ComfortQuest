import { useEffect, useState } from "react";
// import { differenceInDays } from "date-fns";
import { toast } from "react-toastify";
import DatePicker from "./Date/DatePicker";
import MyStyledTextField from "./myStyledTextField";
import { StateContext } from "../context/States";
import { TokenStatusContext } from "../context/tokenStatus";
import { HotelContext } from "../context/HotelsContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";

const BookingWidget = ({ price, numberOfRooms, Hotel, Address, picture1 }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { checkIn, checkOut, userDocument } = StateContext();
  const { checkCookie } = TokenStatusContext();
  const { handleHotelBooking } = HotelContext();
  const [bookingData, setBookingData] = useState({
    noOfRooms: 1,
    name: "",
    phone: "",
  });
  const [days, setDays] = useState(0);
  const [month, setMonths] = useState(0);
  const [year, setYear] = useState(0);
  const [hotelPrice, setHotelPrice] = useState(price);
  // To control the number of dates of booking.
  useEffect(() => {
    if (checkIn < checkOut) {
      const days = Math.abs(checkOut.$D - checkIn.$D);
      const months = Math.abs(checkOut.$M - checkIn.$M);
      const year = Math.abs(checkOut.$Y - checkIn.$Y);
      // console.log("value of date , month and year =", days, month, year);
      const hotelPrice = days * bookingData.noOfRooms * price;
      setDays(days);
      setMonths(months);
      setYear(year);
      setHotelPrice(hotelPrice);
      // console.log("hotel price = ", hotelPrice);
    }
  }, [checkIn, checkOut, bookingData.noOfRooms, price]);

  // handle booking form
  function handleBookingData(e) {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  }
  async function handleBooking() {
    // User must be signed in to book place
    if (!checkCookie()) {
      toast.error("First Login In");
      navigate("/login");
    }

    // BOOKING DATA VALIDATION
    if (days < 1 || month > 1 || year > 1 || checkIn >= checkOut) {
      return toast.error("Please select valid dates");
    } else if (bookingData.noOfGuests < 1) {
      return toast.error("No. of guests can't be less than 1");
    } else if (bookingData.noOfRooms > 20) {
      return toast.error(`Allowed max. no. of rooms: ${20} per user`);
    } else if (bookingData.name.trim() === "") {
      return toast.error("Name can't be empty");
    } else if (!/^\d{10}$/.test(bookingData.phone.trim())) {
      return toast.error("Phone number must be 10 digits long");
    }
    returnResponse(
      await handleHotelBooking(
        id,
        userDocument.email,
        picture1,
        Hotel,
        Address,
        hotelPrice,
        days,
        checkIn,
        checkOut,
        bookingData.name,
        bookingData.phone,
        bookingData.noOfRooms
      )
    );
  }
  console.log("number of days  = ", days);
  function returnResponse(response) {
    if (response.success) {
      toast.success(response.message);
      // navigate('/')
    } else {
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
      <div className="flex justify-center mt-[15px]">
        <Button
          sx={{
            padding: "10px",
            gap: "20px",
          }}
          variant="contained"
          onClick={handleBooking}
        >
          <p>Book this place</p> <span>:</span>
          {days > 0 ? <p>{hotelPrice}</p> : price}
        </Button>
      </div>
    </div>
  );
};

export default BookingWidget;