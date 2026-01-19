// allowed.js
// Loads the NYT Wordle allowed guesses list (includes all solutions)

window.ALLOWED = [];
window.ALLOWED_LOADED = fetch(
  "https://raw.githubusercontent.com/tabatkins/wordle-list/main/words.txt"
)
  .then(r => r.text())
  .then(text => {
    window.ALLOWED = text
      .split("\n")
      .map(w => w.trim().toUpperCase())
      .filter(w => w.length===5);
    console.log('Loaded ${ALLOWED.length} allowed guesses');
  })
  .catch(err => console.error("Failed to load allowed guesses list", err));
