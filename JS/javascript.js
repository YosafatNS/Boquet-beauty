// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
//  ketika hambergur menu diklik
document.querySelector ('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik luar sidebar hilang navbar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})