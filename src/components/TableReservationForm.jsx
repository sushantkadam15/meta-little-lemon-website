import React, { useEffect, useState } from "react";
import { Button, Container } from "./StyledComponents";
import dayjs from "dayjs";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";

const TableReservationForm = ({ fetchAPI, submitAPI }) => {
  const [bookings, setBookings] = useState("");
  const [isAlertDisplayed, setIsAlertDisplayed] = useState(false);

  const [reservationDetails, setReservationDetails] = useState({
    name: "",
    dateAndTime: dayjs(),
    ocassionDetails: "",
  });

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

  const makeReservation = (e) => {
    e.preventDefault();
    if (reservationDetails.name.length > 0) {
      const response = submitAPI(reservationDetails);
      if (response) {
        setIsAlertDisplayed(true);
        setTimeout(() => {
          setIsAlertDisplayed(false);
        }, 2000);
      }
    }
  };

  return (
    <Container>
      {/* Alert  */}
      {isAlertDisplayed && (
        <div className=" $ absolute left-0 right-0 top-20 mx-auto w-[24rem] rounded-lg bg-secondary p-2 text-center text-lg text-primary shadow-lg">{`Reservation for ${
          reservationDetails.name
        } is confirmed at ${reservationDetails.dateAndTime.format(
          "LLLL",
        )} `}</div>
      )}

      <div className=" my-24 rounded-2xl md:p-10 md:shadow-2xl">
        <h1 className="mb-5 text-5xl text-primary md:text-7xl">
          Table Reservation
        </h1>
        <form className="text-lg">
          <div className=" flex min-h-[596px] flex-col gap-12 md:flex-row md:items-center">
            <div className="text-primary md:w-1/2">
              <label className=" mb-3 block text-2xl font-bold" htmlFor="name">
                Name
              </label>
              <input
                className="h-10 w-full rounded-sm p-2 focus:outline-primary md:w-96"
                type="text"
                id="name"
                required
                value={reservationDetails.name}
                onChange={(e) => {
                  setReservationDetails((previousDetail) => ({
                    ...previousDetail,
                    name: e.target.value,
                  }));
                }}
              />

              <label
                className=" mb-3 mt-8 block text-2xl font-bold"
                htmlFor="ocassion"
              >
                Occasion
              </label>
              <textarea
                className=" w-full rounded-sm p-2 focus:outline-primary md:w-96"
                rows={8}
                placeholder="Birthday, Anniversary..."
                id="ocassion"
              />
            </div>

            {/* Date and time picker   */}
            <div className="relative md:w-1/2">
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
                slotProps={{
                  actionBar: { actions: [] },
                }}
                onChange={(value) => {
                  setReservationDetails((previousDetail) => ({
                    ...previousDetail,
                    dateAndTime: value,
                  }));
                }}
              />
            </div>
          </div>

          <Button name="Reserve Now" onclick={makeReservation} />
        </form>
      </div>
    </Container>
  );
};

export default TableReservationForm;
