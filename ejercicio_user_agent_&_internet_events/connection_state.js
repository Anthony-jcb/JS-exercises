export default function connectionState(Elements) {
  const $container = document.querySelector(Elements.container),
    $message_container = document.querySelector(Elements.messageContainer),
    $onlineIcon = document.querySelector(Elements.onlineIcon),
    $offlineIcon = document.querySelector(Elements.offlineIcon);

  function networkStatus() {
    if (navigator.onLine) {
      $container.classList.toggle("hide");
      $message_container.innerHTML = "Conectado a internet";

      $onlineIcon.classList.toggle("none");
      setTimeout(() => {
        $container.classList.toggle("hide");
      }, 3000);
      setTimeout(() => {
        $onlineIcon.classList.toggle("none");
      }, 3500);
    } else {
      $container.classList.toggle("hide");
      $message_container.innerHTML = "No tienes conexión";

      $offlineIcon.classList.toggle("none");
      setTimeout(() => {
        $container.classList.toggle("hide");
      }, 3000);
      setTimeout(() => {
        $offlineIcon.classList.toggle("none");
      }, 3500);
    }
  }

  window.addEventListener("online", networkStatus);
  window.addEventListener("offline", networkStatus);
}
