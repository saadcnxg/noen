import { Button } from "./Button.js";

export function App() {
  return `
    <h1>ZeroCommit Demo</h1>
    ${Button("save")}
    ${Button("submit")}
  `;
}