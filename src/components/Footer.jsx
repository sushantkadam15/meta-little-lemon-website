import React from "react";
import { Container } from "./StyledComponents";
import logo from "../assets/icons_assets/Logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-5 text-base-100">
      <Container>
        <div className=" flex flex-col items-center justify-between gap-10 text-center md:flex-row md:items-start md:gap-0 md:text-left">
          <div className="rounded bg-base-100 p-2">
            <img className=" inline-block" src={logo} alt="Little Lemon Logo" />
          </div>
          <div className="">
            <h3 className=" mb-1 font-bold">Quick Links</h3>
            <ul className=" flex flex-col">
              <Link to={"/"}>Home</Link>
              <Link to={"/construction"}>About</Link>
              <Link to={"/construction"}>Menu</Link>
              <Link to={"/reservation"}>Reservation</Link>
              <Link to={"/construction"}>About</Link>
              <Link to={"/construction"}>Login</Link>
            </ul>
          </div>
          <div>
            <h3 className=" mb-1 font-bold">Contacts</h3>
            <ul>
              <li>
                Address: 1234 Jane St. <br />
                Toronto, ON
              </li>
              <li>Phone: +1 123 456 7890</li>
              <li>Email: info@ll.com</li>
            </ul>
          </div>
          <div>
            <h3 className=" mb-1 font-bold">Social Media</h3>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
