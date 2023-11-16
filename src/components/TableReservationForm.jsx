import React, { useEffect, useState } from "react";
import { Button, Container } from "./StyledComponents";
import dayjs from "dayjs";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";

const TableReservationForm = ({ fetchAPI, submitAPI }) => {
  const [bookings, setBookings] = useState("");

  const currentTime = dayjs();
  const officeHoursStart = currentTime.hour(15).minute(0).second(0);
  const officeHoursEnd = currentTime.hour(23).minute(0).second(0);
  const defaultTime =
    currentTime.isAfter(officeHoursStart) &&
    currentTime.isBefore(officeHoursEnd)
      ? currentTime
      : officeHoursStart;

  const lastAllowedBookingDate = currentTime.add(7, "day");

  const fetchBookings = () => {
    const response = fetchAPI();
    setBookings(response);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const checkAvailability = (currentDate) => {
    const formattedCurrentTime = currentDate.format();
    const formattedBookings = [];
    for (const booking of bookings) {
      formattedBookings.push(booking.format());
    }
    return formattedBookings.includes(formattedCurrentTime);
  };

  const shouldDisableTime = (currentDate) => {
    const isNotAvailable = checkAvailability(currentDate);
    const isOffHours = currentDate.hour() < 15 || currentDate.hour() >= 23;
    return isOffHours || isNotAvailable;
  };

  return (
    <Container>
      <div className=" rounded-2xl p-10 shadow-2xl">
        <h1 className="text-5xl text-primary md:text-7xl">Table Reservation</h1>
        <form className="my-14 text-xl">
          <div className="flex items-center justify-between gap-12">
            <div className="text-primary">
              <label className=" mb-3 block text-2xl font-bold" htmlFor="name">
                Name
              </label>
              <input
                className="h-12 w-full p-2 focus:outline-primary md:w-96"
                type="text"
                id="name"
              />
              <label
                className=" mb-3 mt-8 block text-2xl font-bold"
                htmlFor="ocassion"
              >
                Occasion
              </label>
              <textarea
                className=" w-full p-2 focus:outline-primary md:w-96"
                rows={5}
                placeholder="Birthday, Anniversary..."
                id="ocassion"
              />
            </div>
            <div className="w-full">
              <StaticDateTimePicker
                sx={{
                  backgroundColor: "#EDEFEE",
                  marginTop: 5,
                  marginBottom: 5,
                }}
                maxDateTime={lastAllowedBookingDate}
                defaultValue={defaultTime}
                disablePast={true}
                minutesStep={30}
                autoFocus={true}
                shouldDisableTime={shouldDisableTime}
              />
            </div>
          </div>

          <Button name="Reserve Now" onclick={() => console.log("Hello")} />
        </form>
      </div>
    </Container>
  );
};

export default TableReservationForm;
