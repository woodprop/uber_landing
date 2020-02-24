window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.top_menu'),
        menuItem = document.querySelectorAll('.top_menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('top_menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('top_menu_active');
        })
    })
});