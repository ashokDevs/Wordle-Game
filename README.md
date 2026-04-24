# Word Guess Game

This repository contains a simple web-based word guessing game implemented in JavaScript. The game presents a grid of input cells where the user can type letters to guess the hidden word. After each guess, the cells are colored to indicate:

- **Correct letter in the correct position** – highlighted in a distinct color (e.g., `#e8a87c`).
- **Correct letter in the wrong position** – highlighted in another color (e.g., `#c38d93`).

## Files

- **script.js** – Core game logic handling user input, answer checking, and UI updates.
- **index.html** (not shown) – The HTML structure that includes the grid, input cells, and a submit button.
- **style.css** (not shown) – Styles for the grid and animation effects.

## How it works

1. The user enters letters into the grid cells.
2. Press **Enter** or click the **Submit** button to trigger the answer check.
3. The script collects the entered letters, compares them against the predefined answer (`["t", "a", "t", "t", "y"]`), and updates the cell colors accordingly.
4. Animation classes are applied to provide visual feedback.

## Development

To modify the answer, edit the `ANSWER` array in `script.js`. Ensure that the length of the answer matches the number of cells in each row of the grid.

Feel free to customize the styling, layout, or logic to fit your needs.

---

*Created automatically to address the GitHub issue requesting a README file.*