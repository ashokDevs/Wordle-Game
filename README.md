# Word Guess Game

This repository contains a simple web-based word guessing game implemented in JavaScript. The game presents a series of input cells where the user can type letters and submit their answer. It provides visual feedback for correct letters, present letters, and animates the cells.

## Files

- **script.js** – Core game logic handling user input, answer checking, and UI updates.
- **index.html** – (Assumed) The HTML structure for the game layout.
- **styles.css** – (Assumed) Styling for the game, including animation classes.

## How It Works

1. The answer is stored in the constant `ANSWER` (currently set to `["t", "a", "t", "t", "y"]`).
2. Users can submit their guess by pressing **Enter** or clicking the **Submit** button.
3. The script collects values from the input cells, compares them against the answer, and updates the background color of each cell:
   - `#e8a87c` – Correct letter in the correct position.
   - `#c38d93` – Correct letter but in a different position.
4. Cells are animated using CSS classes `animate` and `notAnimate`.

## Running the Game

1. Open `index.html` in a web browser.
2. Fill in the input fields with your guess.
3. Press **Enter** or click the **Submit** button to see the results.

## Customization

- To change the target word, modify the `ANSWER` array in `script.js`.
- Adjust styles and animations in the CSS file to suit your design preferences.

## License

This project is provided for educational purposes and does not include a specific license.
