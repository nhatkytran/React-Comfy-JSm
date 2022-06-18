import { ImagesStyles } from "../styledComponents";

import desk from "../../imgs/nice-desk.jpeg";

function Images() {
  return (
    <ImagesStyles>
      <div className="main-image"></div>
      <div className="gallery">
        <img src={desk} alt="" className="active" />
        <img src={desk} alt="" />
        <img src={desk} alt="" />
        <img src={desk} alt="" />
        <img src={desk} alt="" />
      </div>
    </ImagesStyles>
  );
}

export default Images;
