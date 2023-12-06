let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');searchForm.classList.remove('active');
   shoppingcart.classList.remove('active');
   loginform.classList.remove('active');
  
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

// var swiper = new Swiper(".product-slider,{
//     loop:true,
//     spaceBetween: 20,
//     autoplay:{
//         delay:7500,
//         disableonInteraction:false,
//     }
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//        },
//       768: {
//         slidesPerView: 2,
//         },
//       1020: {
//         slidesPerView: 3,
        
//       },
//     },
// });

  