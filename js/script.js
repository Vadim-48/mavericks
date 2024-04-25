const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: 'fade',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
        delay: 5000,
      },
  });


  
const link = document.querySelectorAll(".nav__item-link");
function linkClick () {
  Array.from(link).forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelector(".nav__menu").classList.remove("active")
      document.querySelector(".header__burger").classList.remove("active")
      document.querySelector("body").classList.remove("lock")
    })
  })
}
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".header__burger").addEventListener("click", function() {
    document.querySelector(".nav__menu").classList.toggle("active")
    document.querySelector(".header__burger").classList.toggle("active")
    document.querySelector("body").classList.toggle("lock")
  })
  linkClick();
})