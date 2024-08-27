let menu = document.querySelector('#menu');
let sideBar = document.querySelector('.side-bar');
let isOpen = false;

menu.addEventListener('click', function() {
    if (isOpen) {
        sideBar.style.display = 'none';
        menu.innerHTML = 'Menu';
    } else {
        // Open the sidebar
        sideBar.style.display = 'block';
        menu.innerHTML = 'Close'
    }
    isOpen = !isOpen; // Toggle the state
});