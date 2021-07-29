export default function userDeviceInfo(id) {
  const $container = document.getElementById(id);

  const isMobile = {
    android: () => navigator.userAgent.match(/Android/i),
    ios: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
    windowsPhone: () => navigator.userAgent.match(/Windows Phone/i),
    any: function () {
      return this.android() || this.ios() || this.windowsPhone();
    },
  };

  const isDesktop = {
    windows: () => navigator.userAgent.match(/windows nt/i),
    linux: () => navigator.userAgent.match(/linux/i),
    mac: () => navigator.userAgent.match(/mac os/i),
    any: function () {
      return this.windows() || this.linux() || this.mac();
    },
  };

  const isBrowser = {
    chrome: () => navigator.userAgent.match(/chrome/i),
    firefox: () => navigator.userAgent.match(/firefox/i),
    safari: () => navigator.userAgent.match(/safari/i),
    ie: () => navigator.userAgent.match(/msie|iemobile/i),
    edge: () => navigator.userAgent.match(/edge/i),
    opera: () => navigator.userAgent.match(/opera/i),
    any: function () {
      return (
        this.chrome() ||
        this.firefox() ||
        this.safari() ||
        this.ie() ||
        this.edge() ||
        this.opera()
      );
    },
  };

  $container.innerHTML = `
      <span>
        ${navigator.userAgent}
      </span>
      <br>
      <span>
        <strong>Plataforma</strong>: ${isMobile.any() ? isMobile.any() : isDesktop.any()}
      </span>
      <br>
      <span>
        <strong>Navegador</strong>: ${isBrowser.any()}
      </span>`;
}