import { useState, useEffect } from "react";

import PageHero from "../components/PageHero";
import { AboutStyles } from "./styledComponents";

function About() {
  const [height, setHeight] = useState("660px");

  useEffect(() => {
    const navbarRect = document
      .querySelector(".navbar")
      .getBoundingClientRect();
    const footerRect = document
      .querySelector(".footer")
      .getBoundingClientRect();
    const pageHeroRect = "17vh";

    // const pageHeroRect = document
    //   .querySelector(".page-hero")
    //   .getBoundingClientRect();

    // Instead of getting pageHeroRect from the DOM
    // set pageHeroRect = 17vh because that is the value
    // set for pageHero's height in css

    setHeight(
      `calc(100vh - ${pageHeroRect} - ${navbarRect.height}px - ${footerRect.height}px)`
    );
  }, []);

  return (
    <div
      className="about-container"
      style={{
        backgroundColor: "var(--main-bg)",
      }}
    >
      <PageHero title="About" />
      <AboutStyles
        className="about center-flex-display"
        style={{ width: "100%", minHeight: height }}
      >
        <div className="app">
          <div className="about-content">
            <div className="about-content-image">
              <div></div>
            </div>
            <div className="about-content-story">
              <h2>Our Story</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                accusantium sapiente tempora sed dolore esse deserunt eaque
                excepturi, delectus error accusamus vel eligendi, omnis beatae.
                Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                dolore, obcaecati incidunt sequi blanditiis est exercitationem
                molestiae delectus saepe odio eligendi modi porro eaque in
                libero minus unde sapiente consectetur architecto. Ullam rerum,
                nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed
                quos similique amet. Ex, voluptate accusamus nesciunt totam
                vitae esse iste.
              </p>
            </div>
          </div>
        </div>
      </AboutStyles>
    </div>
  );
}

export default About;
