const D = document,
  W = window;

export default function scrollTop(input) {
  const $input = D.querySelector(input);

  W.addEventListener("scroll", (e) => {
    const pageScrollTop = W.pageYOffset;

    if (pageScrollTop > 400) {
      $input.classList.remove("hidden");
    } else {
      $input.classList.add("hidden");
    }
  });

  D.addEventListener("click", (e) => {
    if (e.target.matches(input) || e.target.matches(`${input} *`)) {
      W.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
