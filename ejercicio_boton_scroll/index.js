import darkMode from "./dark_mode.js"
import scrollTop from "./scroll_top.js";

document.addEventListener("DOMContentLoaded", () => {
  darkMode("#switch", "[data-dark]", "dark", "light");
  scrollTop(".scrollTop");
});
