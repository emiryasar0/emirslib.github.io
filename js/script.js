// script.js

// Ana menü öğelerini seçin
var menuItems = document.querySelectorAll('.nav > ul > li');

// Her ana menü öğesi için fare olaylarını dinleyin
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('mouseenter', showSubMenu);
  menuItem.addEventListener('mouseleave', hideSubMenu);
});

// Alt menüyü göster
function showSubMenu() {
  // Alt menüyü seçin
  var subMenu = this.querySelector('.alt-menu');
  if (subMenu) {
    // Alt menüyü görünür yap
    subMenu.style.display = 'block';
  }
}

// Alt menüyü gizle
function hideSubMenu() {
  // Alt menüyü seçin
  var subMenu = this.querySelector('.alt-menu');
  if (subMenu) {
    // Alt menüyü gizle
    subMenu.style.display = 'none';
  }
}

// Alt alt menüyü göster
var subMenuItems = document.querySelectorAll('.alt-menu > li');

subMenuItems.forEach(function (subMenuItem) {
  subMenuItem.addEventListener('mouseenter', showSubSubMenu);
  subMenuItem.addEventListener('mouseleave', hideSubSubMenu);
});

function showSubSubMenu() {
  var subSubMenu = this.querySelector('.sub-alt-menu');
  if (subSubMenu) {
    // Tüm alt alt menüleri gizle
    var allSubSubMenus = document.querySelectorAll('.sub-alt-menu');
    allSubSubMenus.forEach(function (menu) {
      menu.style.display = 'none';
    });

    subSubMenu.style.display = 'block';
    subSubMenu.style.top = '0';
    subSubMenu.style.left = this.offsetWidth + 'px';
  }
}

function hideSubSubMenu() {
  var subSubMenu = this.querySelector('.sub-alt-menu');
  if (subSubMenu) {
    subSubMenu.style.display = 'none';
  }
}
