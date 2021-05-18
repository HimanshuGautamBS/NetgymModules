import React from "react";
import "./App.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
function RequestTime() {
  const dateValue = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    14
  );
  const startDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    10
  );
  const enddate = new Date(new Date().getFullYear(), new Date().getMonth(), 20);
  return (
    <div>
      <DatePickerComponent
        placeholder="Enter Date"
        value={dateValue}
        min={startDate}
        max={enddate}
        format="dd-MMM-yy"

        // start="Year"
        // depth="Year"
      ></DatePickerComponent>
    </div>
  );
}

export default RequestTime;
