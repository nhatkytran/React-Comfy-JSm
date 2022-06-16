import { HeroStyles } from "./styledComponents";

function Hero() {
  return (
    <HeroStyles>
      <div className="app">
        <div class="hero">
          <div hero-content>
            <h2>Design Your Comfort Zone</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <button>SHOW NOW</button>
          </div>
          <div className="hero-gallery">Gallery</div>
        </div>
      </div>
    </HeroStyles>
  );
}

export default Hero;
