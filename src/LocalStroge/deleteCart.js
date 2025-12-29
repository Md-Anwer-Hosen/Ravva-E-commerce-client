const deleteCart = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = cart.filter((item) => item._id !== id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

export default deleteCart;
