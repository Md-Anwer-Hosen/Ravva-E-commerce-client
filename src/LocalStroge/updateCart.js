// LocalStorge/updateCart.js

const updateQuantity = (id, newQty) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = cart.map((item) =>
    item._id === id ? { ...item, quantity: newQty } : item
  );
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

export default updateQuantity;
