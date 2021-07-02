const $nav_btn = document.getElementById("nav-btn"),
  $nav = document.getElementById("nav-list"),
  $bars_menu_icon = document.getElementById("bars_icon"),
  $close_menu_icon = document.getElementById("close_icon");

function showPopupMenu() {
  $nav.classList.toggle("show");
  $nav_btn.classList.toggle("btn_active");
  $bars_menu_icon.classList.toggle("show");
  $close_menu_icon.classList.toggle("show");
}

$nav_btn.onclick = showPopupMenu;