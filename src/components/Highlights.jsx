import React from "react";
import { Button, Card, Container } from "./StyledComponents";
import greeksalad from "../assets/icons_assets/greek salad.jpg";
import bruchetta from "../assets/icons_assets/bruchetta.svg";
import lemondessert from "../assets/icons_assets/lemon dessert.jpg";

const menuItems = [
  {
    title: "Greek Salad",
    price: 12.99,
    imgsrc: greeksalad,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    title: "Bruchetta",
    price: 5.99,
    imgsrc: bruchetta,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    title: "Lemon Dessert",
    price: 5.0,
    imgsrc: lemondessert,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Highlights = () => {
  return (
    <Container>
      <div className=" mb-10 mt-12 flex max-w-max flex-col  items-start justify-between md:mt-32">
        <h2>This Week's Special!</h2>
        <Button
          name="Online Menu"
          onclick={() => console.log("Online Menu clicked")}
        />
      </div>
      <div className=" flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0 ">
        {menuItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            imgsrc={item.imgsrc}
            imgalt={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default Highlights;
