import { useCartContext } from "../../context";
import priceFormatter from "../../utils/priceFormatter";
import { CartPayStyles } from "../styledComponents";

function CartPay() {
  const { totalAmount, shippingFee } = useCartContext();

  return (
    <CartPayStyles>
      <div className="pay">
        <div className="pay-content">
          <div className="subtotal">
            <span className="bold">Subtotal :</span>
            <span className="bold">{priceFormatter(totalAmount)}</span>
          </div>
          <div className="shipping">
            <span>Shipping Fee :</span>
            <span>{priceFormatter(shippingFee)}</span>
          </div>
          <hr />
          <div className="total">
            <span className="bold">Order Total :</span>
            <span className="bold">
              {priceFormatter(totalAmount + shippingFee)}
            </span>
          </div>
        </div>
        <button className="btn">PROCEED TO CHECKOUT</button>
      </div>
    </CartPayStyles>
  );
}

export default CartPay;
