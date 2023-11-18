import React from "react";
import { Button, Container } from "./StyledComponents.jsx";
import logo from "../assets/icons_assets/Logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isIndicatorDisplayed, setIsIndicatorDisplayed] = useState(true);

  return (
    <Container>
      <header className="flex items-center justify-between mx-2 md:mx-0">
        <img src={logo} alt="Little Lemon Logo" />
        <nav className=" hidden md:block">
          <ul className="flex gap-10">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/construction"}>About</Link>
            </li>
            <li>
              <Link to={"/construction"}>Menu</Link>
            </li>
            <li className="relative">
              {isIndicatorDisplayed && (
                <span className="absolute bottom-5 left-20 me-3 flex h-3 w-3 animate-ping	 rounded-full bg-accent-one"></span>
              )}
              <Link
                onClick={() => setIsIndicatorDisplayed(false)}
                to={"/reservation"}
              >
                Reservation
              </Link>
            </li>
            <li>
              <Link to={"/construction"}>Order Online</Link>
            </li>
            <li className="ml-4">
              <Link to={"/construction"}>Login</Link>
            </li>
          </ul>
        </nav>
        <nav className="md:hidden ">
          <Link to={"/reservation"}>
            <Button name={"Reservation"} />
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Navigation;
