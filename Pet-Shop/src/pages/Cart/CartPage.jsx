import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modalSlice";
import { removeItem } from "../../redux/сartlSlice";

import Button from "../../components/Buttons/Button/Button";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handlePlaceOrder() {
    dispatch(
      openModal({
        title: "Order Placed",
        content: (
          <>
            <p>Your order has been placed successfully.</p>
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Price: {totalPrice}</p>
          </>
        ),
      })
    );
  }

  return (
    <div>
      <p>Cart Page</p>
      {cartItems.length === 0 ? (
        <div>
          <p>Cart is empty</p>
          <Link to="/products">Continue shopping</Link>
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>
                ID: {item.id}, title: {item.title}
              </p>
              <p>
                Price: {item.price}, Quantity: {item.quantity}, Total:{" "}
                {item.price * item.quantity}
              </p>
              {item.discont_price && (
                <p>Dicounted Price: {item.discont_price * item.quantity}</p>
              )}
              <button
                onClick={() => {
                  dispatch(removeItem({ id: item.id }));
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: {totalPrice}</p>
      <Button onClick={handlePlaceOrder}>Place order</Button>
    </div>
  );
}
