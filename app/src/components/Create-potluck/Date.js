import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function Date(props) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}
