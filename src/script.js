let menu = document.querySelector('#menu');
let sideBar = document.querySelector('.side-bar');
let body = document.querySelector('body');
let isOpen = false;

menu.addEventListener('click', function() {
    if (isOpen) {
        // close the sidebar
        sideBar.style.display = 'none';
        menu.innerHTML = 'Menu';
        body.style.maxWidth = '0';
        body.style.overflow = 'none';
    } else {
        // Open the sidebar
        sideBar.style.display = 'block';
        menu.innerHTML = 'Close'
        body.style.maxWidth = '100vh';
        body.style.overflow = 'hidden';
    }
    isOpen = !isOpen;
});