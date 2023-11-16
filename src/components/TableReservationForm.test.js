import React from "react";
import {render, screen} from "@testing-library/react";
import TableReservationForm from "./TableReservationForm.jsx";

test('Renders the Table Reservation Form Heading', () => {
	render(<TableReservationForm/>);
	const headingElement = screen.getByText("Reserve Now");
	expect(headingElement).toBeInTheDocument()
})