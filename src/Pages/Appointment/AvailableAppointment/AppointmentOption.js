import React from "react";

const AppointmentOption = ({ appointmentOptions, setTreatment }) => {
  const { name, slots } = appointmentOptions;
  return (
    <div className="card lg:w-[425px] shadow-xl">
      <div className="card-body text-center mt-10">
        <h2 className="text-2xl text-secondary font-bold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(appointmentOptions)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
