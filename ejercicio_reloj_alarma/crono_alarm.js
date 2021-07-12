const D = document;

export function Cronometer($Display, $startButton, $stopButton) {
  let Tempo;

  D.addEventListener("click", (event) => {
    if (event.target.matches($startButton)) {
      Tempo = setInterval(() => {
        let clockTime = new Date().toLocaleTimeString();
        D.querySelector($Display).innerHTML = `<h3>${clockTime}</h3>`;
      }, 1000);

      event.target.disabled = true;
    }

    if (event.target.matches($stopButton)) {
      clearInterval(Tempo);
      D.querySelector($Display).innerHTML = null;
      D.querySelector($startButton).disabled = false;
    }
  });
}

export function Alarm($startButton, $stopButton) {
  let alarm_sound;

  D.addEventListener("click", (event) => {
    if (event.target.matches($startButton)) {
      alarm_sound = new Audio("./assets/alarm.mp3");
      alarm_sound.play();
      alarm_sound.loop = true;

      event.disabled = true;
    }
  });

  D.addEventListener("click", (event) => {
    if (event.target.matches($stopButton)) {
      alarm_sound.pause();
      
      D.querySelector($startButton).disabled = false;
    }
  });
}
