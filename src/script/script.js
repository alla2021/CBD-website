$(document).ready(function(){
  $('.slider').slick({
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),
    slidesToShow: 1,
    slidesToScroll: 1, 
  });
});

//burger
const btnMenu = document.querySelector('.js-burger-btn');
const menu = document.querySelector('.js-header');

btnMenu.addEventListener('click', function() {
  menu.classList.toggle('active');
});

const headerLinks = document.querySelectorAll('.js-header a');
headerLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menu.classList.remove('active');
  });
});

document.addEventListener('mouseup', function(e) {
  if (!menu.contains(e.target)) {
    menu.classList.remove('active');
  }
});


//modal-window
const openBtn = document.getElementById('btn-login');
const modal = document.getElementById('modal');

modal.innerHTML = ` <form class="modal__form">
<span class="modal__icon icon-cross" id="btn-close"></span>
<h2 class="modal__title">Login</h2>
<label class="modal__label" for="email">Email</label>
<input class="modal__input" type="email" name="email" id="email" required>
<label  class="modal__label" for="password">Password</label>
<input class="modal__input" type="password" name="password" id="password" required>
<spa class="modal__holder">Forgot Password? <a class="modal__link"> Click Here</a></spa>
<div class="modal__holder">Don't have an account?<a class="modal__link"> Sign up</a></div>
<button class="modal__login-btn">Login</button> </form> `

const closeBtn = document.getElementById('btn-close');

openBtn.addEventListener('click', function () {
    modal.style.display = "block";
  })

closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
    openBtn.style.display = "block";
  })
  

//search field
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const productsSection = document.getElementById("products");
  const products = document.querySelectorAll(".products__item");

    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase().trim();
  
      let found = false;
  
      products.forEach(product => {
        const productTitle = product.querySelector(".products__subtitle").textContent.toLowerCase().trim();
        if (productTitle.includes(searchTerm)) {
          found = true;
          if (found) {
            const offsetTop = productsSection.offsetTop;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
          }
        }
      });

      if (!found) {
        alert("Product not found");
      }
    }
  
    searchInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        performSearch();
      }
    });
  
    searchButton.addEventListener("click", function () {
      performSearch();
    });
  
});

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  document.addEventListener("DOMContentLoaded", function () {
    
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

   //showCart
    const openBtnCart = document.getElementById('cart-btn');
    const showCart = document.getElementById('cart-content');

    openBtnCart.addEventListener('click', function () {
        if (cartItems.length > 0) {
          showCart.style.display = "block";
          updateCartUI();
        } else {
          alert("Your cart is empty. Add some items!");
        }
    });

    function updateCartUI() {
        const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

        showCart.innerHTML = `
        <div class="modal-cart__wrapper">
        <span class="modal-cart__icon icon-cross" id="cart-btn-close"></span>
        <h3 class="modal-cart__title">Cart</h3>
          <table class="modal-cart__items">
          <thead>
              <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
          </thead>
          <tbody>
              ${cartItems.map(item => `
                <tr class="modal-cart__item">
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              `).join('')}
              <tr class="modal-cart__total">
              <td colspan="3" class="modal-cart__total-title">Total:</td>
              <td class="modal-cart__total-title">$${totalAmount.toFixed(2)}</td>
          </tr>
          </tbody>
        </table>
        <div class="modal-cart__holder">
              <button class="modal-cart__btn" id="buy-cart" >Buy</button>
              <button class="modal-cart__btn" id="clear-cart">Clear</button>
              </div>
        </div>`

        const clearCartButton = document.getElementById("clear-cart");
        const closeBtnCart = document.getElementById('cart-btn-close');

        clearCartButton.addEventListener("click", function () {
          localStorage.removeItem("cartItems");
          cartItems = []; 
          updateCartUI();
          updateCart()
          showCart.style.display = "none"; 
        });

        closeBtnCart.addEventListener('click', function () {
          showCart.style.display = "none";
          openBtnCart.style.display = "block";
        })
    }
  });


