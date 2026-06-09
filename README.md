# Project Overview

This repository contains a simple web-based word guessing game implemented in JavaScript. The main functionality is provided by `script.js`, which handles user input, checks answers against a predefined answer array, and updates the UI accordingly.

## Files

- **script.js**: Core JavaScript logic for the game. It listens for the **Enter** key or a button click to trigger answer validation, animates cells, and provides visual feedback based on correctness.

## How It Works

1. **Answer Definition**: The correct answer is stored in the `ANSWER` array (e.g., `["t", "a", "t", "t", "y"]`).
2. **User Interaction**: Users input letters into cells. Pressing **Enter** or clicking the **Submit** button calls `CheckAnswer()`.
3. **Validation**: The script collects inputs, compares them with `ANSWER`, and updates each cell’s background color:
   - Correct letter in the correct position: `#e8a87c`.
   - Correct letter in the wrong position: `#c38d93`.
4. **Animation**: Cells are animated using CSS classes (`animate` and `notAnimate`).

## Usage

Open the associated HTML file in a web browser to run the game. Ensure that the DOM contains elements with IDs and classes referenced in `script.js` (e.g., `#submit`, `.row`, `.cell`).

## Contributing

Feel free to fork the repository, make improvements, or fix bugs. When submitting a pull request, ensure that any new functionality is reflected in this README.

## License

This project is provided as-is without any explicit license.
