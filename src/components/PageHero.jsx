import { Link } from "react-router-dom";
import { PageHeroStyles } from "./styledComponents";

function PageHero({ title }) {
  return (
    <PageHeroStyles className="page-hero">
      <div className="app">
        <div className="page-hero-content">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/${title}`}>{title}</Link>
        </div>
      </div>
    </PageHeroStyles>
  );
}

export default PageHero;
