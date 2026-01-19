// solutions.js
// Loads the NYT Wordle solution list from a known-good repo

window.SOLUTIONS = [];
window.SOLUTIONS_LOADED = fetch(
  "https://raw.githubusercontent.com/tabatkins/wordle-list/main/answers.txt"
)
  .then(r => r.text())
  .then(text => {
    window.SOLUTIONS = text
      .split("\n")
      .map(w => w.trim().toUpperCase())
      .filter(w => w.length===5);
    console.log('Loaded ${SOLUTIONS.length} solutions');
  })
  .catch(err => console.error("Failed to load solutions list", err));
