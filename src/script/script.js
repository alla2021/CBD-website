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


