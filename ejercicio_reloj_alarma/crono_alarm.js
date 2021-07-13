const D = document;

export function Cronometer($Display, $startButton, $stopButton) {
  let Tempo;

  D.addEventListener("click", (event) => {
    if (
      event.target.matches($startButton) ||
      event.target.matches(`${$startButton} *`)
    ) {
      Tempo = setInterval(() => {
        let clockTime = new Date().toLocaleTimeString();
        D.querySelector($Display).innerHTML = `<h3>${clockTime}</h3>`;
      }, 1000);

      event.target.disabled = true;
    }

    if (
      event.target.matches($stopButton) ||
      event.target.matches(`${$stopButton} *`)
    ) {
      clearInterval(Tempo);
      D.querySelector($Display).innerHTML = `<h3>00:00:00</h3>`;
      D.querySelector($startButton).disabled = false;
    }
  });
}

export function Alarm($newAlarm, $stopAlarm) {
  let alarm_sound;

  D.addEventListener("click", (event) => {
    if (
      event.target.matches($newAlarm) ||
      event.target.matches(`${$newAlarm} *`)
    ) {
      try {
        alarm_sound.pause();
      } catch (error) {}

      alarm_sound = new Audio("./assets/alarm.mp3");
      alarm_sound.play();
      alarm_sound.loop = true;

      event.target.disabled = true;
    }
  });

  D.addEventListener("click", (event) => {
    if (
      event.target.matches($stopAlarm) ||
      event.target.matches(`${$stopAlarm} *`)
    ) {
      alarm_sound.pause();

      D.querySelector($newAlarm).disabled = false;
    }
  });
}