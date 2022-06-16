import { HomeStyles } from "./styledComponents";
import { Hero } from "../components";

function Home() {
  return (
    <HomeStyles>
      <div className="home">
        <Hero />
      </div>
    </HomeStyles>
  );
}

export default Home;
