import { Link } from "react-router-dom";
import { HeroStyles } from "./styledComponents";

function Hero() {
  return (
    <HeroStyles>
      <div className="app">
        <div className="hero">
          <div className="hero-content">
            <h2 className="underline">Design Your Comfort Zone</h2>
            <p style={{ marginBottom: "20px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <Link to="/products" className="btn btn-shownow">
              SHOW NOW
            </Link>
          </div>
          <div className="hero-gallery">
            <div className="hero-gallery-main"></div>
            <div className="hero-gallery-sub"></div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

export default Hero;
