const D = document,
  W = window;

export default function tester(form) {
  const $form = D.getElementById(form);
  let tester;

  D.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = W.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
      );
    }
  });

  D.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
}
