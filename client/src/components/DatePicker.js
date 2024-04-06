import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StateContext } from "../context/States";
import dayjs from "dayjs";

export default function DatePickerValue() {
  const { checkIn, SetCheckIn, checkOut, setCheckOut } = StateContext();
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          label="Check-in date"
          value={checkIn}
          minDate={dayjs(dateString)}
          onChange={(e) => SetCheckIn(e)}
        />
        <DatePicker
          label="Check-out date"
          value={checkOut}
          minDate={dayjs(dateString)}
          onChange={(e) => setCheckOut(e)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
