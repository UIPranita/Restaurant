/**
   * Gallery Slider
   */
new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  // footer wowjs
  new WOW().init();

  // back to top button

 //Get the button
 var mybutton = document.getElementById("btn-back-to-top");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () {
     scrollFunction();
 };

 function scrollFunction() {
     if (
         document.body.scrollTop > 20 ||
         document.documentElement.scrollTop > 20
     ) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }
 // When the user clicks on the button, scroll to the top of the document
 mybutton.addEventListener("click", backToTop);

 function backToTop() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }

 // Review 

 