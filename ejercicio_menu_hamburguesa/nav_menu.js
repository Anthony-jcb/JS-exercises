export default function showPopupMenu(
  menuButton,
  Menu,
  menuLinks,
  normalIcon,
  activeIcon
) {
  const d = document;

  function menuButtonIcon(normalIcon, activeIcon) {
    d.querySelector(normalIcon).classList.toggle("show");
    d.querySelector(activeIcon).classList.toggle("show");
  }

  d.addEventListener("click", (event) => {
    if (
      event.target.matches(menuButton) ||
      event.target.matches(`${menuButton} *`)
    ) {
      d.querySelector(Menu).classList.toggle("not-active");
      menuButtonIcon(normalIcon, activeIcon);
    }

    if (event.target.matches(menuLinks)) {
      d.querySelector(Menu).classList.add("not-active");
      menuButtonIcon(normalIcon, activeIcon);
    }
  });
}