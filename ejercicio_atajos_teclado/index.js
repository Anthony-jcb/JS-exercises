import { moveBall, Shortcuts } from "./shortcuts.js";

const D = document;

D.addEventListener("keydown", (e) => {
  Shortcuts(e);
  moveBall(e, ".ball", ".stage");
});