const menu = document.getElementById('barMenu');
const home = document.getElementById('home');
const sideBar = document.getElementById('sideBar');

if (screen.width <= 768) {
    home.classList.add('active');
    sideBar.classList.add('active');
}

menu.addEventListener('click', () => {
    // if(home.classList)
    home.classList.toggle('active');
    sideBar.classList.toggle('active');
})
