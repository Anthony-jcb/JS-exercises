import userDeviceInfo from "./device_detection.js";
import connectionState from "./connection_state.js"

const D = document;

D.addEventListener("DOMContentLoaded", () => {
  userDeviceInfo("user_device");
})