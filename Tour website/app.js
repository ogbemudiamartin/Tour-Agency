 let searchbtn = document.querySelector('#search-btn');
 let searchbar = document.querySelector('.search-bar-container');
 let formbtn = document.querySelector('#login-btn');
 let loginform = document.querySelector('.login-form-container');
 let formcontrol = document.querySelector('.login-form-container');
 let formclose = document.querySelector('#form-close');
let  menu = document.querySelector("#menu-bar")
let  navbar = document.querySelector(".navbar")
let  videobtn = document.querySelectorAll(".vid-btn")



window.onscroll=()=>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}
//menu

menu.addEventListener('click' , ()=>{
   menu.classList.toggle('fa-times');
   menu.classList.toggle('active');
 })
//end


 //search bar and menu

 searchbtn.addEventListener('click' , ()=>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
 })

 //end 

 //login form open and close
 formbtn.addEventListener('click' , ()=>{
    loginform.classList.add('active');
 })
 
 formclose.addEventListener('click' , ()=>{
    loginform.classList.remove('active');
 })
//end


 // video

 videobtn.forEach(btn =>{
   btn.addEventListener('click',()=>{
      document.querySelector('.controls .active ').classList.remove('.active');
      btn.classList.add('.active');
      let src = btn.getattribute('data-src');
      document.querySelector('#video-slider').src = src;
   })
 })
/*
 var swiper = new swiper(".mySwiper", {

   spaceBetween:20,
   loop:true,
   autoplay:{
      delay:2500,
      disableOninteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   breakpoint:{
      640:{
         slideperview: 1,
      },
      768:{
         slideperview:2,
      },
      1024:{
         slideperview:3,
      },
   },
 });
*/
var swiper = new Swiper(".mySwiper", {
   breakpoint:{
      640:{
         slideperview: 1,
      },
      768:{
         slideperview:2,
      },
      1024:{
         slideperview:3,
      },
   },
   spaceBetween: 20,
   loop:true,
   autoplay:{
      delay:2500,
      disableOninteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });
