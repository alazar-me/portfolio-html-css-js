$(document).ready(function(){
$('.slider').slick({
arrows: false,
dots:true,
appendDots: '.slider-dot',
dotsClass:'dots'
});
let hamberger = document.querySelector('.hamberger-btn');
let close = document.querySelector('.close');
let mobileNav = document.querySelector('.mobile-nav');
let click1 = document.querySelector('.click');
let click2 = document.querySelector('.click-1');
let click3 = document.querySelector('.click-2');
let click4 = document.querySelector('.click-3');






hamberger.addEventListener('click',function(){
   mobileNav.classList.add('open')
});

close.addEventListener('click',function(){
    mobileNav.classList.remove('open')

});

click1.addEventListener('click',function(){
    mobileNav.classList.remove('open')

});
click2.addEventListener('click',function(){
    mobileNav.classList.remove('open')

});
click3.addEventListener('click',function(){
    mobileNav.classList.remove('open')

});
click4.addEventListener('click',function(){
    mobileNav.classList.remove('open')

});
});


window.addEventListener("scroll", function() {
    var scrollToTopButton = document.getElementById("scrollToTopBtn");
  
    if (document.documentElement.scrollTop > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  
  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  