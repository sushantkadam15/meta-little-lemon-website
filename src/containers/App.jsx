import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navigation from "../components/ Navigation.jsx";
import Footer from "../components/Footer.jsx";
import TableReservationForm from "../components/TableReservationForm.jsx";
import { fetchAPI, submitAPI } from "../util/TableReservationAPI.js";


function App() {
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
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navigation />
        <main className="mt-10 min-h-[90vh] min-w-fit md:min-h-[75vh]">
          <TableReservationForm fetchAPI={fetchAPI} submitAPI={submitAPI} />
          {/* <HomePage /> */}
        </main>
        <Footer />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
