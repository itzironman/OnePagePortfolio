const burger = document.querySelector('.header .nav-bar .nav-list .burger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

/* Burger menu click action */
burger.addEventListener('click',()=> {
	burger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
/* End Burger menu click action */

/* After scroll fixed header */
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
});
/* End After scroll fixed header */

/* click menu item and goto that section */
menu_item.forEach((item) => {
    item.addEventListener('click',() => {
        burger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
/* End click menu item and goto that section */