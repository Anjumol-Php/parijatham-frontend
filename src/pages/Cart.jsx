import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
    const { cartItems } = useContext(CartContext);
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h2 className="mb-4">Shopping Cart</h2>

        {cartItems.length === 0 ? (
  <p>Your cart is empty.</p>
) : (
  <div>
    {cartItems.map((item) => (
      <div
        key={item.id}
        className="d-flex align-items-center border rounded p-3 mb-3"
      >
        <img
          src={item.image}
          alt={item.name}
          width="100"
          height="100"
          style={{ objectFit: "cover" }}
        />

        <div className="ms-3">
          <h5>{item.name}</h5>
          <p>₹{item.price}</p>
          <p>Quantity : {item.quantity}</p>
        </div>
      </div>
    ))}
  </div>
)}
      </div>

      <Footer />
    </>
  );
}

export default Cart;