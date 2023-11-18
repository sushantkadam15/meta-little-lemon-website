import { Container, Button } from "./StyledComponents.jsx";
import heroImage from "../assets/icons_assets/restauranfood.jpg";

const HeroSection = () => {
  return (
    <section className=" text-base-100 md:bg-primary md:py-5">
      <Container>
        <div className="relative flex flex-col-reverse md:flex-row">
          <div className=" rounded-lg  bg-primary px-5 pb-10 pt-52 md:w-1/2 md:p-0">
            <h1 className="h-16 text-secondary">Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="mb-5 mt-2 max-w-xs">
              We are a family owned Mediterranean Restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Button
              name={"Reserve a Table"}
              onclick={() => console.log("Clicked")}
            />
          </div>
          <div className="flex w-full justify-center md:mx-0  md:justify-end relative h-44">
            <img
              className=" h-96 w-72 rounded-lg object-cover shadow-lg md:w-96 absolute"
              src={heroImage}
              alt={"Food"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default HeroSection;
