import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="rounded-lg shadow-2xl mb-10"
            alt="dentist chair"
          />
          <div className="lg:mr-10 border rounded-lg shadow-md">
            <DayPicker
              fromYear={2015}
              toYear={2030}
              captionLayout="dropdown"
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
