import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowUpShort } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useProductsContext, useCartContext } from "../../context";
import { AddToCartStyles } from "../styledComponents";

function AddToCarts() {
  const { singleProduct } = useProductsContext();
  const { addToCart } = useCartContext();

  const { stock, colors } = singleProduct;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  function handleMainColor(color) {
    setMainColor(color);
  }

  function handleQuantity(event) {
    const target = event.target.closest(".quantity-btn");
    const targetName = target.getAttribute("name");

    setQuantity((quantity) => {
      let newQuantity;

      if (targetName === "minus")
        newQuantity = quantity - 1 < 1 ? 1 : quantity - 1;
      if (targetName === "plus")
        newQuantity = quantity + 1 > stock ? stock : quantity + 1;

      return newQuantity;
    });
  }

  return (
    <AddToCartStyles>
      <div className="colors-container">
        <span className="colors">Colors:</span>
        <span className="color-circles">
          {colors.map((color, index) => (
            <span
              key={index}
              className={`color-circle ${color === mainColor ? "active" : ""}`}
              style={{ backgroundColor: `${color}` }}
              onClick={handleMainColor.bind(null, color)}
            >
              {color === mainColor && (
                <span className="arrow">
                  <BsArrowUpShort />
                </span>
              )}
            </span>
          ))}
        </span>
      </div>
      <div className="quantity">
        <span className="quantity-btn" name="minus" onClick={handleQuantity}>
          <AiOutlineMinus />
        </span>
        <span className="quantity-number">{quantity}</span>
        <span className="quantity-btn" name="plus" onClick={handleQuantity}>
          <AiOutlinePlus />
        </span>
      </div>
      <Link
        to="/cart"
        className="btn add-to-cart-btn"
        onClick={addToCart.bind(null, singleProduct, mainColor, quantity)}
      >
        ADD TO CART
      </Link>
    </AddToCartStyles>
  );
}

export default AddToCarts;
