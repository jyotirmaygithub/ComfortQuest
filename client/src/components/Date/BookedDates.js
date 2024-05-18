import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function BookedDates(props) {
  const { CheckIn, CheckOut } = props;
  const date1 = new Date(CheckIn);
  const date2 = new Date(CheckOut);

  const formattedDate1 = date1.toDateString(); // Converts date to a human-readable string
  const formattedDate2 = date2.toDateString();

  return (
    <div>
      <div className="flex space-x-4">
        <div className="flex">
          <CalendarMonthOutlinedIcon />
          <p>From: {formattedDate1}</p>
        </div>
        <div className="flex">
          <CalendarMonthOutlinedIcon />
          <p>To: {formattedDate2}</p>
        </div>
      </div>
    </div>
  );
}
