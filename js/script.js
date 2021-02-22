/* Меню на мобильных устройствах */
const sidebarToggleBtn = document.querySelector(".menu");
const menuTop = document.querySelector(".menu-top");
const menuMiddle = document.querySelector(".menu-middle");
const menuBottom = document.querySelector(".menu-bottom");
const mobileMenu = document.querySelector(".modal-mobile-menu");
const mobileMenuItems = document.querySelectorAll(".mobile-menu-item");

// Клик по кнопке для скрытия показа меню и изменения иконки
sidebarToggleBtn.onclick = function (event) {
  menuTop.classList.toggle("menu-top-click");
  menuMiddle.classList.toggle("menu-middle-click");
  menuBottom.classList.toggle("menu-bottom-click");
  mobileMenu.classList.toggle("modal-mobile-menu--active");
};

let menuItems = Array.from(mobileMenuItems);

// Клик по пунктам меню и скрытие самого меню
menuItems.forEach((item) => {
  item.onclick = function (event) {
    menuTop.classList.remove("menu-top-click");
    menuMiddle.classList.remove("menu-middle-click");
    menuBottom.classList.remove("menu-bottom-click");
    mobileMenu.classList.remove("modal-mobile-menu--active");
  };
});
