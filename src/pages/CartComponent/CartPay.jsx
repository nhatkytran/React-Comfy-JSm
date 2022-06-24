import { Link } from "react-router-dom";
import { useCartContext, useUserContext } from "../../context";
import priceFormatter from "../../utils/priceFormatter";
import { CartPayStyles } from "../styledComponents";

function CartPay() {
  const { totalAmount, shippingFee } = useCartContext();
  const { appUser, loginWithRedirect } = useUserContext();

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
        {appUser && (
          <Link to="/checkout" className="btn">
            PROCEED TO CHECKOUT
          </Link>
        )}
        {!appUser && (
          <button className="btn" onClick={loginWithRedirect}>
            LOGIN
          </button>
        )}
      </div>
    </CartPayStyles>
  );
}

export default CartPay;
