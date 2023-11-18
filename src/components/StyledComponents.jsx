import React from 'react';
import deliveryicon from "../assets/icons_assets/delivery.svg";

export const Button = ({ name, onclick }) => {
  return (
    <button
      className={"rounded-2xl bg-secondary px-3 py-2 text-neutral"}
      onClick={onclick}
    >
      {name}
    </button>
  );
};

export const Container = (props) => {
  return (
    <div className="mx-5 md:mx-0 my-5 md:max-w-screen-lg lg:mx-auto">
      {props.children}
    </div>
  );
};

export const Card = ({ title, imgsrc, imgalt, price, description }) => {
  return (
    <div className=" relative h-[30rem] w-80 rounded-lg  shadow-lg md:w-56 lg:h-[28rem] lg:w-72">
      <img
        className=" h-52 w-full rounded-lg object-cover"
        src={imgsrc}
        alt={imgalt}
      />
      <div className="p-4">
        <p className="my-2 flex justify-between ">
          <span className="font-extrabold">{title}</span>
          <span className="font-bold text-accent-one">${price}</span>
        </p>
        <p className=" my-4 text-primary">{description} </p>
      </div>
      <button
        className="absolute bottom-4 left-4 font-bold"
        onClick={() => console.log("Card Button")}
      >
        Order a Delivery
        <img className=" ml-2 inline-block" src={deliveryicon} alt="Delivery" />
      </button>
    </div>
  );
};
