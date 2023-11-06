document.addEventListener("DOMContentLoaded", function () {
   const addToCartButtons = document.querySelectorAll(".add-to-cart");
   const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

   function updateCart() {
      const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
      const cartCount = document.getElementById("cart-btn");
      cartCount.textContent = "CART " + totalQuantity;
   }

   function addToLocalStorage(item) {
      const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
         cartItems[existingItemIndex].quantity += 1;
      } else {
         item.quantity = 1;
         cartItems.push(item);
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      updateCart();
   }

   function handleAddToCartClick(event) {
      const button = event.target;
      if (button.classList.contains("add-to-cart")) {
         const name = button.getAttribute("data-name");
         const price = button.getAttribute("data-price");
         const id = button.getAttribute("data-id");

      const item = {
         name: name,
         price: parseFloat(price),
         id: id,
      };

         addToLocalStorage(item);
      }
   }

   updateCart();
   addToCartButtons.forEach(function (button) {
      button.addEventListener("click", handleAddToCartClick);
   });
});

//showCart
const openBtnCart = document.getElementById('cart-btn');
const showCart = document.getElementById('cart-content');

showCart.innerHTML = `
<div class="modal-cart__wrapper">
  <span class="modal-cart__icon icon-cross" id="cart-btn-close"></span>
  <h3 class="modal-cart__title">Cart</h3>
  <div class="modal-cart__holder">
      <button class="modal-cart__btn" id="buy-cart" >Buy</button>
      <button class="modal-cart__btn" id="clear-cart">Clear</button>
      </div>
 </div>`

 const clearCartButton = document.getElementById("clear-cart");

 clearCartButton.addEventListener("click", function () {
   localStorage.removeItem("cartItems");
   cartItems = []; 
 });

 
const closeBtnCart = document.getElementById('cart-btn-close');

openBtnCart.addEventListener('click', function () {
  showCart.style.display = "block";
   })

closeBtnCart.addEventListener('click', function () {
  showCart.style.display = "none";
  openBtnCart.style.display = "block";
})

