import { App } from "./App.js";

document.getElementById("app").innerHTML = App();

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  if (!btn) return;
  console.log("Action:", btn.dataset.action);
});