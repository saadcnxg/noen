import { buttons } from "./buttons.js";

export function Button(key) {
  const config = buttons[key];
  return `
    <button id="${config.id}" class="btn btn-${config.variant}" data-action="${config.action}">
      ${config.label}
    </button>
  `;
}