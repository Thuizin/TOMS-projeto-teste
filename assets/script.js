// ABERTURA E FECHAMENTO DO MENU
var menu = document.getElementById("menu");
var menu2 = document.getElementById("menu2");
var active = document.getElementById("active");
menu.addEventListener('click', () => {
    menu.style.display = 'none';
    menu2.style.display = 'block';
    active.style.display = 'block';
});
menu2.addEventListener('click', () => {
    menu2.style.display = 'none';
    menu.style.display = 'block';
    active.style.display = 'none';
});
///////////////////////////////////////////

