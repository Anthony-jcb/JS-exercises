import { CountDown } from "./countdown.js";

document.addEventListener("DOMContentLoaded", () => {
  CountDown(new Date(2021, 8, 1), "#screen")
})