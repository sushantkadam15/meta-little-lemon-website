import Navigation from "./components/ Navigation";
import HeroSection from "./components/HeroSection.jsx";
import Highlights from "./components/Highlights.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Testimonials from "./components/Testimonials.jsx";
import About from "./components/About.jsx";

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
        <main className="min-w-fit">
          <Navigation />
          <HeroSection />
          <Highlights />
          <Testimonials />
          <About />
        </main>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
