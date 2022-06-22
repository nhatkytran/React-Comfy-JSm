import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

import priceFormatter from "../../utils/priceFormatter";

import { CartItemStyles } from "../styledComponents";

function CartItem() {
  return (
    <CartItemStyles>
      <div className="item center-flex-display">
        <div className="image" />
        <div className="content">
          <h4>Name</h4>
          <p>
            Color : <span />
          </p>
          <p className="small-price">{priceFormatter(100)}</p>
        </div>
      </div>
      <div className="price center-flex-display hide">
        <span>{priceFormatter(100)}</span>
      </div>
      <div className="quantity center-flex-display">
        <AiOutlineMinus className="quantity-icon" />
        <span className="quantity-number">10</span>
        <AiOutlinePlus className="quantity-icon" />
      </div>
      <div className="subtotal center-flex-display hide">
        <span>{priceFormatter(100)}</span>
      </div>
      <div className="trash-bin center-flex-display">
        <span className="trash-bin-icon center-flex-display">
          <FaTrash />
        </span>
      </div>
    </CartItemStyles>
  );
}

export default CartItem;
