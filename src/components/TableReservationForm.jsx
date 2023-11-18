import React, { useEffect, useState } from "react";
import { Button, Container } from "./StyledComponents";
import dayjs from "dayjs";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { useNavigate } from "react-router-dom";

const TableReservationForm = ({ fetchAPI, submitAPI }) => {
  const navigateTo = useNavigate();

  // State initialization
  const [bookings, setBookings] = useState("");
  const [isAlertDisplayed, setIsAlertDisplayed] = useState(false);
  const [reservationDetails, setReservationDetails] = useState({
    name: "",
    dateAndTime: dayjs(),
    ocassionDetails: "", // Typo: should be "occasionDetails"
  });

  // Time-related calculations
  const currentTime = dayjs();
  const officeHoursStart = currentTime.hour(15).minute(0).second(0);
  const officeHoursEnd = currentTime.hour(23).minute(0).second(0);
  const defaultTime =
    currentTime.isAfter(officeHoursStart) &&
    currentTime.isBefore(officeHoursEnd)
      ? currentTime
      : officeHoursStart;

  const lastAllowedBookingDate = currentTime.add(7, "day");

  // Fetch bookings
  const fetchBookings = () => {
    const response = fetchAPI();
    setBookings(response);
  };

  useEffect(() => {
    // Trigger fetching bookings on component mount
    fetchBookings();
  }, []);

  const checkAvailability = (currentDate) => {
    if (bookings) {
      return bookings.some((booking) => booking.isSame(currentDate, "hours"));
    }
  };

  const shouldDisableTime = (currentDate) => {
    // Disable unavailable timeslots
    const isNotAvailable = checkAvailability(currentDate);
    const isOffHours = currentDate.hour() < 15 || currentDate.hour() >= 23;
    return isOffHours || isNotAvailable;
  };

  // Reservation handling function
  const makeReservation = (e) => {
    e.preventDefault();
    if (reservationDetails.name.length > 0) {
      const response = submitAPI(reservationDetails);
      if (response) {
        setIsAlertDisplayed(true);
      }
      setTimeout(() => {
        setIsAlertDisplayed(false);
        navigateTo("/");
      }, 5000);
    }
  };

  return (
    <Container>
      {/* Alert for successful reservation */}
      {isAlertDisplayed && (
        <div className="fixed left-0 right-0 top-0 z-50 mx-auto flex h-full w-screen items-center justify-center rounded-lg p-2 px-24 text-center text-3xl text-primary backdrop-blur-3xl">
          <p>
            {`Reservation for ${
              reservationDetails.name
            } is confirmed at ${reservationDetails.dateAndTime.format(
              "LLLL",
            )}. You are now being directed to home.`}
          </p>
        </div>
      )}

      <div className="my-10 rounded-2xl md:p-10 md:shadow-2xl">
        {/* Form for table reservation */}
        <h1 className="mb-5 text-5xl text-primary md:text-7xl">
          Table Reservation
        </h1>
        <form className="text-lg" onSubmit={(e) => makeReservation(e)}>
          <div className="flex min-h-[596px] flex-col gap-12 md:flex-row md:items-center">
            <div className="text-primary md:w-1/2">
              {/* Name input */}
              <label className="mb-3 block text-2xl font-bold" htmlFor="name">
                Name
              </label>

              {/* Input for name */}
              <input
                className="h-10 w-full rounded-sm p-2 focus:outline-primary md:w-96"
                type="text"
                id="name"
                required
                value={reservationDetails.name}
                onChange={(e) => {
                  // Update reservation name
                  setReservationDetails((previousDetail) => ({
                    ...previousDetail,
                    name: e.target.value,
                  }));
                }}
              />

              {/* Occasion textarea */}
              <label
                className="mb-3 mt-8 block text-2xl font-bold"
                htmlFor="occasion"
              >
                Occasion
              </label>

              {/* Textarea for occasion */}
              <textarea
                className="w-full rounded-sm p-2 focus:outline-primary md:w-96"
                rows={8}
                placeholder="Birthday, Anniversary..."
                id="occasion"
                aria-labelledby="occasion"
              />
            </div>

            {/* Date and time picker */}
            <div className="relative md:w-1/2">
              <StaticDateTimePicker
                // DateTime picker for booking
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
                  // Update reservation date and time
                  setReservationDetails((previousDetail) => ({
                    ...previousDetail,
                    dateAndTime: value,
                  }));
                }}
                aria-labelledby="dateTimePicker"
              />
            </div>
          </div>

          {/* Button to submit reservation */}
          <Button type="submit" name="Reserve Now" />
        </form>
      </div>
    </Container>
  );
};

export default TableReservationForm;
