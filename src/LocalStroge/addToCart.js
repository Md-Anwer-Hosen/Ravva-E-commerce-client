const addToCart = (products) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item._id === products._id);

  if (existing) {
    existing.quantity += existing.quantity;
  } else {
    cart.push({ ...products });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export default addToCart;
