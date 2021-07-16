function TimeDiference(dateObject, timeIn) {
  let now = new Date().getTime(),
  limitTime = dateObject.getTime() - now;
  
  const DAY = (limitTime / (1000 * 60 * 60 * 24)),
    HOUR = (limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    MINUTE = (limitTime % (1000 * 60 * 60)) / (1000 * 60),
    SECOND = (limitTime % (1000 * 60)) / 1000;

  let timeMetric;

  switch (timeIn) {
    case "seconds":
      timeMetric = SECOND;
      break;
    case "minutes":
      timeMetric = MINUTE;
      break;
    case "hours":
      timeMetric = HOUR;
      break;
    case "days":
      timeMetric = DAY;
      break;
  }
  
  if (timeMetric === DAY){
    return Math.floor(timeMetric);
  } else {
    return ("0" + Math.floor(timeMetric)).slice(-2)
  };
}

export function CountDown(dateObject, screen) {
  if (dateObject === undefined)
    return console.error("Necesitas introducir una fecha");
  if (!(dateObject instanceof Date))
    return console.error("Debes usar el objeto Date() para dar una fecha");

  let $screen = document.querySelector(screen);
  let countTempo = setInterval(() => {
    $screen.innerHTML = `
    <h3>
    Days ${TimeDiference(dateObject, "days")}
    : Hours ${TimeDiference(dateObject, "hours")}
    : Minutes ${TimeDiference(dateObject, "minutes")}
    : Seconds ${TimeDiference(dateObject, "seconds")}
    </h3>`;
  }, 1000);
}
