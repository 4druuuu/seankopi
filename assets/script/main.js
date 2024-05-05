const navbarNav = document.querySelector('.navbar-nav');
// ketika di menu di klik
document.querySelector ('#menu').
onclick = () =>{
    navbarNav.classList.toggle('active');

};
// klik diluar sidebar
const menu =document.querySelector('#menu');

document.addEventListener('click',function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
    }
});





gsap.from('.navbar-logo',{opacity:0, duration: 1.5, delay: 1,y:10})
gsap.from('.navbar-nav,.navbar-extra',{opacity:0, duration: 1, delay: 1.5, y:30 , stragger: 0.2})
gsap.from('.herosection-content',{opacity:0, duration: 1.5, delay: 1,y:10})
