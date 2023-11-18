import React from "react";
import { Container } from "./StyledComponents";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily",
    message:
      "Little Lemon is a fantastic spot! Their Mediterranean cuisine is truly remarkable.",
  },
  {
    name: "David",
    message:
      "I've never tasted Mediterranean food this authentic and delicious before. Little Lemon is a gem!",
  },
  {
    name: "Sophia",
    message:
      "Visiting Little Lemon was an incredible experience. The blend of traditional recipes with a modern touch is extraordinary.",
  },
];

const Testimonials = () => {
  return (
    <section className=" mt-24 w-screen bg-primary pt-10 text-center text-base-100">
      <Container>
        <h2>Testimonials</h2>
        <div className="my-10 flex flex-col items-center justify-between py-10 md:flex-row md:py-20">
          {testimonials.map((testimonial, index) => (
            <div className="h-72 py-2 md:relative md:h-48 md:w-1/4" key={index}>
              <div className="flex justify-center text-secondary">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <blockquote className="my-5">{testimonial.message}</blockquote>
              <p className="left-0 right-0 mt-1  font-bold md:absolute md:bottom-2">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
