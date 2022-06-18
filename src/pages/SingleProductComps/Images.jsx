import { useState } from "react";
import { useProductsContext } from "../../context";
import { ImagesStyles } from "../styledComponents";

function Images() {
  const {
    singleProduct: { images },
  } = useProductsContext();
  const [mainImage, setMainImage] = useState(images?.at(0));

  function handleImage(index) {
    setMainImage(images?.at(index));
  }

  return (
    <ImagesStyles>
      <div
        className="main-image"
        style={{ backgroundImage: `url(${mainImage?.url})` }}
      ></div>
      <div className="gallery">
        {images?.map((image, index) => {
          return (
            <img
              key={image.id}
              src={image.thumbnails.large.url}
              alt={`Gallery ${image.id}`}
              className={image.id === mainImage.id ? "active" : ""}
              onClick={handleImage.bind(null, index)}
            />
          );
        })}
      </div>
    </ImagesStyles>
  );
}

export default Images;
