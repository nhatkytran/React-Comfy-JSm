import { HomeStyles } from "./styledComponents";
import { Hero, Services, Contact, FeaturedProducts } from "../components";

function Home() {
  return (
    <HomeStyles className="home">
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </HomeStyles>
  );
}

export default Home;
