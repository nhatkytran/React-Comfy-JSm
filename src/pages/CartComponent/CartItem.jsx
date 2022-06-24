import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context";

import priceFormatter from "../../utils/priceFormatter";
import upperFirstLetter from "../../utils/upperFirstLetter";

import { CartItemStyles } from "../styledComponents";

function CartItem({
  id,
  idWithColor,
  image,
  name,
  color,
  price,
  quantity,
  max,
}) {
  const { changeQuantity, deleteProduct } = useCartContext();
  const subtotal = price * quantity;

  return (
    <CartItemStyles>
      <div className="item center-flex-display">
        <div className="image" style={{ backgroundImage: `url(${image})` }} />
        <div className="content">
          <h4>{upperFirstLetter(name)}</h4>
          <p>
            Color : <span style={{ backgroundColor: `${color}` }} />
          </p>
          <p className="small-price">{priceFormatter(price)}</p>
        </div>
      </div>
      <div className="price center-flex-display hide">
        <span>{priceFormatter(price)}</span>
      </div>
      <div className="quantity center-flex-display">
        <AiOutlineMinus
          className="quantity-icon"
          onClick={changeQuantity.bind(null, id, idWithColor, max, "down")}
        />
        <span className="quantity-number">{quantity}</span>
        <AiOutlinePlus
          className="quantity-icon"
          onClick={changeQuantity.bind(null, id, idWithColor, max, "up")}
        />
      </div>
      <div className="subtotal center-flex-display hide">
        <span>{priceFormatter(subtotal)}</span>
      </div>
      <div className="trash-bin center-flex-display">
        <span
          className="trash-bin-icon center-flex-display"
          onClick={deleteProduct.bind(null, idWithColor)}
        >
          <FaTrash />
        </span>
      </div>
    </CartItemStyles>
  );
}

export default CartItem;
