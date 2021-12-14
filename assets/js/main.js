const $  = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/*================================ SHOW MENU ================================*/

const navMenu   = $('#nav-menu');
const navToggle = $('#nav-toggle');
const navClose  = $('#nav-close');
/*================================ Menu show ================================*/
 if(navToggle){
     navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
     })
 }
/*================================ Menu Hidden ================================*/
 if(navClose){
     navClose.addEventListener('click',()=>{
         navMenu.classList.remove('show-menu')
     })
 }
/*================================ Remove menu Mobie ================================*/
  const navLink = $$ ('.nav-link')
  function linkAction() {
      navMenu.classList.remove('show-menu');
  }
  navLink.forEach(n => n.addEventListener('click',linkAction));
/*================================ HOME SWIPER ================================*/
var homeSwiper = new Swiper(".home-swiper",{
    spaceBetween:30,
    loop:'true',
    pagination:{
        el:".swiper-pagination",
    },
});