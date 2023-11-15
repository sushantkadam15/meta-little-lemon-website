import { Container } from "./StyledComponents.jsx";
import logo from "../assets/icons_assets/Logo.svg";

const Navigation = () => {
  return (
    <Container>
      <header className="flex items-center justify-between">
        <img src={logo} alt="Little Lemon Logo" />
        <nav className=" hidden md:block">
          <ul className="flex gap-10">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservation">Reservation</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li className="ml-4">
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};

export default Navigation;
