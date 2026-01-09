let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      image: image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Item added to cart");
}

function updateCartCount() {
  let count = document.getElementById("cart-count");
  if (count) {
    count.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

document.addEventListener("DOMContentLoaded", updateCartCount);

