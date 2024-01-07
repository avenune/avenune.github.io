// side navbar
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);
// M = obj milik materiallize
// Sidenav = func nya
// init() = utk inisialisasi


// slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
   indicators: false,
   height:450,
   transition: 500,
   interval: 5000
});


// parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);


// gallery box
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);


// scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
   scrollOffset: 50
});