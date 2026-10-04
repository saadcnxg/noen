const quotes = [
  "A real friend is one who walks in when the rest of the world walks out.",
  "Friendship is born at that moment when one person says to another: 'What! You too?'",
  "Good friends are like stars. You don't always see them, but you know they're there.",
  "A friend is someone who knows all about you and still loves you.",
  "Friendship doubles our joy and divides our sorrow.",
  "Walking with a friend in the dark is better than walking alone in the light.",
  "Life is better with friends by your side."
];

const quoteText = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuote");
let lastIndex = -1;

function showQuote() {
  let i;
  do {
    i = Math.floor(Math.random() * quotes.length);
  } while (i === lastIndex);
  lastIndex = i;

  quoteText.style.opacity = 0;
  setTimeout(() => {
    quoteText.textContent = "\u201C" + quotes[i] + "\u201D";
    quoteText.style.opacity = 1;
  }, 200);
}

newQuoteBtn.addEventListener("click", showQuote);
showQuote();

const nameInput = document.getElementById("nameInput");
const msgInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");
const formError = document.getElementById("formError");
const wall = document.getElementById("wall");

function addNote(name, message) {
  const note = document.createElement("div");
  note.className = "note";

  const title = document.createElement("strong");
  title.textContent = "To " + name + " \uD83D\uDC9B";

  const body = document.createElement("p");
  body.textContent = message;

  note.appendChild(title);
  note.appendChild(body);
  wall.prepend(note);
}

sendBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const message = msgInput.value.trim();

  if (!name || !message) {
    formError.textContent = "Please fill in both the name and the message.";
    return;
  }

  formError.textContent = "";
  addNote(name, message);
  nameInput.value = "";
  msgInput.value = "";
});

addNote("Everyone", "Thank you for being the reason I smile. Friends like you are rare!");