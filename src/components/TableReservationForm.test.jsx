import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TableReservationForm from "./TableReservationForm";
import { BrowserRouter } from "react-router-dom";

// Mock fetchAPI and submitAPI functions
const mockFetchAPI = jest.fn();
const mockSubmitAPI = jest.fn();

describe("TableReservationForm component", () => {
  beforeEach(() => {
    // Reset mocks and render the component before each test
    mockFetchAPI.mockClear();
    mockSubmitAPI.mockClear();
    render(
      <BrowserRouter>
        <TableReservationForm
          fetchAPI={mockFetchAPI}
          submitAPI={mockSubmitAPI}
        />
      </BrowserRouter>
    );
  });

  test("renders form inputs and date/time picker", () => {
    // Check if essential elements are present in the form
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Reserve Now" })
    ).toBeInTheDocument();
  });

  test("submits reservation details on button click", () => {
    // Simulate user input and form submission
    const nameInput = screen.getByLabelText("Name");
    const occasionTextarea = screen.getByLabelText("Occasion");
    const reserveButton = screen.getByRole("button", { name: "Reserve Now" });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(occasionTextarea, { target: { value: "Birthday" } });
    fireEvent.click(reserveButton);

    // Check if submitAPI function was called with correct data when the form is submitted
    expect(mockSubmitAPI).toHaveBeenCalledWith({
      name: "John Doe",
      occasionDetails: "Birthday", // Corrected typo in the original code
    });
  });

  // Additional tests can be added for edge cases, validations, etc.
});