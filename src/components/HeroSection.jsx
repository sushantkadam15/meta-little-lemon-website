import {Container, StyledButton} from "./StyledComponents.jsx";
import heroImage from '../assets/icons_assets/restauranfood.jpg'

const HeroSection = () => {
    return (<section className="bg-primary text-base-100 py-2">
        <Container>
            <div className="flex-row flex relative">
                <div>
                    <h1 className="text-secondary h-16">Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="max-w-xs my-2">
                        We are a family owned Mediterranean Restaurant, focused on traditional recipes served with a
                        modern twist.
                    </p>
                    <StyledButton name={"Reserve a Table"} onclick={() => console.log("Clicked")}/>
                </div>
                <div className="h-80 w-80  absolute right-1 top-5">
                    <img className="h-full w-full object-cover rounded-2xl" src={heroImage} alt={"Food"}/>
                </div>
            </div>
        </Container>
    </section>)
}
export default HeroSection