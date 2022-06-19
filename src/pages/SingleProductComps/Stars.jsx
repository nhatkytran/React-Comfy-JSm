import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useProductsContext } from "../../context";
import { StarsStyles } from "../styledComponents";

function Stars() {
  const {
    singleProduct: { stars, reviews },
  } = useProductsContext();

  return (
    <StarsStyles>
      {Array.from({ length: 5 }, (_, index) => {
        return (
          <span key={index}>
            {stars >= index + 1 ? (
              <BsStarFill />
            ) : stars >= index + 0.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </span>
        );
      })}
      <span className="stars"> - {stars} stars</span>
      <span className="reviews">({reviews} reviews)</span>
    </StarsStyles>
  );
}

export default Stars;
