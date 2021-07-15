const D = document;
let x = 0,
  y = 0;

export function moveBall(event, ball, stage) {
  const $ball = D.querySelector(ball),
    $stage = D.querySelector(stage);

  const $limitsBall = $ball.getBoundingClientRect(),
    $limitsStage = $stage.getBoundingClientRect();

  // switch case to handle the different keys
  switch (event.code) {
    case "ArrowUp":
      if ($limitsBall.top > $limitsStage.top) {
        event.preventDefault();
        y--;
      }
      break;
    case "ArrowDown":
      if ($limitsBall.bottom < $limitsStage.bottom) {
        event.preventDefault();
        y++;
      }
      break;
    case "ArrowLeft":
      if ($limitsBall.left > $limitsStage.left) {
        event.preventDefault();
        x--;
      }
      break;
    case "ArrowRight":
      if ($limitsBall.right < $limitsStage.right) {
        event.preventDefault();
        x++;
      }
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function Shortcuts(event) {
  if (event.altKey && event.code === "KeyA") {
    alert("This is an alert");
  }

  if (event.altKey && event.code === "KeyC") {
    confirm("Do you like bread?");
  }

  if (event.altKey && event.code === "KeyM") {
    prompt("Tell me about you.");
  }
}
