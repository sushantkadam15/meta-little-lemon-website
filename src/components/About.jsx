import React from "react";
import { Container } from "./StyledComponents";
import imageA from "../assets/icons_assets/Mario and Adrian A.jpg";
import imageB from "../assets/icons_assets/restaurant.jpg";

const About = () => {
  return (
    <Container>
      <div className=" my-24 flex flex-col items-center md:flex-row ">
        <div className="font-markazi md:w-1/2">
          <h2 className=" text-5xl">Little Lemon</h2>
          <h3 className="text-2xl">Chicago</h3>
          <p className="font-karla my-4  mr-1 text-lg leading-tight">
            Located in the vibrant heart of Chicago, Little Lemon is more than
            just a restaurant; it's a testament to the fusion of tradition and
            innovation in Mediterranean cuisine. Our family-owned establishment
            takes pride in curating a culinary journey that marries time-honored
            recipes with contemporary twists. Step into our inviting space and
            savor the harmonious blend of authentic flavors and modern flair. At
            Little Lemon, we invite you to indulge in an unforgettable dining
            experience, where each dish tells a story of tradition, innovation,
            and a passion for exquisite flavors.
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:h-[40rem]">
          <img
            className=" rounded-sm object-cover md:relative md:left-28 md:h-72 md:w-72 lg:left-32 lg:h-96  lg:w-96 "
            src={imageA}
            alt="Chef and Owner Mario and Adrian"
          />
          <img
            className="hidden rounded-sm object-cover md:relative md:bottom-32 md:left-5 md:block md:h-72 md:w-72 lg:h-96 lg:w-96"
            src={imageB}
            alt="Restaurant"
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
