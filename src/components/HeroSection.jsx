import { Container, Button } from "./StyledComponents.jsx";
import heroImage from "../assets/icons_assets/restauranfood.jpg";

const HeroSection = () => {
  return (
    <section className="bg-primary py-2 text-base-100">
      <Container>
        <div className="relative flex flex-col-reverse md:flex-row">
          <div>
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
          <div className="md:absolute md:right-1 md:top-6 mx-auto md:mx-0 h-80 w-96 shadow-lg">
            <img
              className="h-full w-full rounded-2xl object-cover"
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
