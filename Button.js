import { buttons } from "./buttons.js";
import { theme } from "./theme.js";

export function Button(key) {
  const config = buttons[key];
  return `
    <button id="${config.id}" class="btn btn-${config.variant}" 
            data-action="${config.action}" 
            style="margin: 0 ${theme.spacing.buttonGap};">
      ${config.label}
    </button>
  `;
}