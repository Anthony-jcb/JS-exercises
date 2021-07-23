const D = document;

function buttonIcon(darkIcon, lightIcon) {
  D.getElementById(darkIcon).classList.toggle("hide");
  D.getElementById(lightIcon).classList.toggle("hide");
}

export default function darkMode(input, dataDark, darkIcon, lightIcon) {
  const $swicher = D.getElementById(input);
  const $dataDark = D.querySelectorAll(dataDark);

  function switchMode() {
    $dataDark.forEach((item) => {
      item.classList.toggle("dark");
    });
    buttonIcon(darkIcon, lightIcon);
  }

  D.addEventListener("click", (e) => {
    if (e.target.matches(input) || e.target.matches(`${input} *`)) {
      if (localStorage.getItem("theme") === "dark") {
        switchMode(darkIcon, lightIcon);
        localStorage.setItem("theme", "light");
      } else {
        switchMode(darkIcon, lightIcon);
        localStorage.setItem("theme", "dark");
      }
    }
  });

  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  } else if (localStorage.getItem("theme") === "dark") {
    switchMode();
  }
}
