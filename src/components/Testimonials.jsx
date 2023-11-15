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
    <section className=" mt-24 py-5 md:py-10 bg-primary text-center text-base-100">
      <Container>
        <h2>Testimonials</h2>
        <div className="my-10 flex justify-between">
          {testimonials.map((testimonial, index) => (
            <div className="md:relative w-1/4 h-72 md:h-48" key={index}>
              <div className="flex justify-center text-secondary">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <blockquote className="my-5">{testimonial.message}</blockquote>
              <p className="mt-1 font-bold md:absolute  md:bottom-2 left-0 right-0">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
