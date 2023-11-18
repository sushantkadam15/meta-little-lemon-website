import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navigation from "../components/ Navigation.jsx";
import Footer from "../components/Footer.jsx";
import HomePage from "../containers/HomePage.jsx";
import TableReservationForm from "../components/TableReservationForm.jsx";
import { fetchAPI, submitAPI } from "../util/TableReservationAPI.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnderConstruction from "../components/UnderConstruction.jsx";

function App() {
  // Mui Theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#495E57",
      },
      secondary: {
        main: "#F4CE14",
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Navigation />
          <main className="mt-10 min-h-[90vh] min-w-fit md:min-h-[75vh]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/reservation"
                element={
                  <TableReservationForm
                    fetchAPI={fetchAPI}
                    submitAPI={submitAPI}
                  />
                }
              />
              <Route path="/construction" element={<UnderConstruction />} />
            </Routes>
          </main>
          <Footer />
        </LocalizationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
