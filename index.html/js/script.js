// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika menu di click
document.querySelector('#menu').onclick =( ) => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk hilangin nav

const pilihan = document.querySelector(' #menu ');
 
document.addEventListener('click', function(e) {
    if (!pilihan.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

