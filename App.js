import { Button } from "./Button.js";

export function App() {
  return `
    <h1>ZeroCommit Demo</h1>
    <div class="button-row">
      ${Button("save")}
      ${Button("submit")}
    </div>
  `;
}