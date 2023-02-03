import { useContext, useEffect } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../components/contexts/cart-dropdown.context";
import "./checkout.styles.scss";

const CheckoutPage = () => {
  const { setIsCartOpen, cartItems, cartTotal } = useContext(CartContext);

  useEffect(() => setIsCartOpen(false), []);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default CheckoutPage;
