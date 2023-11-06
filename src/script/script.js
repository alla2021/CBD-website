$(document).ready(function(){
  $('.slider').slick({
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),
    slidesToShow: 1,
    slidesToScroll: 1, 
  });
});

//burger
const btnMenu = $('.js-burger-btn');
const menu = $('.js-header');
$(function() {
  btnMenu.on('click', function () {
    menu.toggleClass('active');
  });
  $( '.js-header a' ).on("click", function(){
    menu.removeClass('active');
  });
});

$(document).mouseup(function (e){ 
  if (!menu.is(e.target) 
      && menu.has(e.target).length === 0) { 
    menu.removeClass('active');
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
   
