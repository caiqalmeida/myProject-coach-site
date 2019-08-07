const $menu = document.querySelector(".nav-menu-items");

const $btnMenuOpen = document.querySelector(".btnMenu");

// const $btnMenuClose = document.querySelector(".nav-menu-items-link");

$btnMenuOpen.addEventListener('click', function (){
    $menu.classList.add('nav-menu-items_open');
})
for (var i = 0 ; i < 3 ; i++) {
    var $btnMenuClose = document.querySelectorAll(".nav-menu-items-link")[i];
    $btnMenuClose.addEventListener('click', function (){
        $menu.classList.remove('nav-menu-items_open');
    })
}
