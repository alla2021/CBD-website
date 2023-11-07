//const addToCartButtons = document.querySelectorAll(".add-to-cart");
//let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//document.addEventListener("DOMContentLoaded", function () {
   
//   function updateCart() {
//      const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
//      const cartCount = document.getElementById("cart-btn");
//      cartCount.textContent = "CART " + totalQuantity;
//   }

//   function addToLocalStorage(item) {
//      const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

//      if (existingItemIndex !== -1) {
//         cartItems[existingItemIndex].quantity += 1;
//      } else {
//         item.quantity = 1;
//         cartItems.push(item);
//      }

//      localStorage.setItem("cartItems", JSON.stringify(cartItems));
//      updateCart();
//   }

//   function handleAddToCartClick(event) {
//      const button = event.target;
//      if (button.classList.contains("add-to-cart")) {
//         const name = button.getAttribute("data-name");
//         const price = button.getAttribute("data-price");
//         const id = button.getAttribute("data-id");

//      const item = {
//         name: name,
//         price: parseFloat(price),
//         id: id,
//      };
//         addToLocalStorage(item);
//      }
//   }

//   updateCart();
//   addToCartButtons.forEach(function (button) {
//      button.addEventListener("click", handleAddToCartClick);
//   });

//   //showCart
//   const openBtnCart = document.getElementById('cart-btn');
//   const showCart = document.getElementById('cart-content');

//   openBtnCart.addEventListener('click', function () {
//      if (cartItems.length > 0) {
//         showCart.style.display = "block";
//         updateCartUI();
//      } else {
//         alert("Your cart is empty. Add some items!");
//      }
//   });

//   function updateCartUI() {
//      const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//      showCart.innerHTML = `
//      <div class="modal-cart__wrapper">
//      <span class="modal-cart__icon icon-cross" id="cart-btn-close"></span>
//      <h3 class="modal-cart__title">Cart</h3>
//         <table class="modal-cart__items">
//         <thead>
//            <tr>
//               <th>Item Name</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//            </tr>
//         </thead>
//         <tbody>
//            ${cartItems.map(item => `
//               <tr class="modal-cart__item">
//               <td>${item.name}</td>
//               <td>$${item.price.toFixed(2)}</td>
//               <td>${item.quantity}</td>
//               <td>$${(item.price * item.quantity).toFixed(2)}</td>
//               </tr>
//            `).join('')}
//            <tr class="modal-cart__total">
//            <td colspan="3" class="modal-cart__total-title">Total:</td>
//            <td class="modal-cart__total-title">$${totalAmount.toFixed(2)}</td>
//         </tr>
//         </tbody>
//      </table>
//      <div class="modal-cart__holder">
//            <button class="modal-cart__btn" id="buy-cart" >Buy</button>
//            <button class="modal-cart__btn" id="clear-cart">Clear</button>
//            </div>
//      </div>`

//      const clearCartButton = document.getElementById("clear-cart");
//      const closeBtnCart = document.getElementById('cart-btn-close');

//      clearCartButton.addEventListener("click", function () {
//         localStorage.removeItem("cartItems");
//         cartItems = []; 
//         updateCartUI();
//         updateCart()
//         showCart.style.display = "none"; 
//      });

//      closeBtnCart.addEventListener('click', function () {
//         showCart.style.display = "none";
//         openBtnCart.style.display = "block";
//      })
//   }
//});

