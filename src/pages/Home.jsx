import { HomeStyles } from "./styledComponents";
import { Hero, Services, Contact } from "../components";

function Home() {
  return (
    <HomeStyles className="home">
      <Hero />
      <Services />
      <Contact />
    </HomeStyles>
  );
}

export default Home;
