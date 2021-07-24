const D = document,
  W = window;

export default function responsible(object) {
  const breakpoint = W.matchMedia(object.mq);

  const responsive = (e) => {
    if (e.matches) {
      D.getElementById(object.id).innerHTML = object.desktopContent;
    } else {
      D.getElementById(object.id).innerHTML = object.mobileContent;
    }
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
}
