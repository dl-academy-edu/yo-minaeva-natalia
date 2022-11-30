var mobileBurger = document.querySelector('.humburger');
var mobileClose = document.querySelector('.header-mobile__close');
var mobileHeader = document.querySelector('.header-mobile');

mobileBurger.addEventListener('click', function(){
    mobileHeader.classList.add('header-mobile__open');
})

mobileClose.addEventListener('click', function(){
    mobileHeader.classList.remove('header-mobile__open');
})