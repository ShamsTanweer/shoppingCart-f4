import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, resetCart } from "./actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleResetCart = () => {
    dispatch(resetCart());
    alert("Items have been checked out.");
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: {totalPrice}</p>
    </div>
  )}