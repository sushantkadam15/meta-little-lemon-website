import React from "react";
import { Container } from "./StyledComponents";
import dayjs from "dayjs";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";

// Date
// Time
// Number of guests
// Occasion (Birthday, Anniversary)
// Submit reservation button (to submit the form)

const TableReservationForm = () => {
  return (
    <Container>
      <form className=" bg-primary">
        
        <StaticDateTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
      </form>
    </Container>
  );
};

export default TableReservationForm;
