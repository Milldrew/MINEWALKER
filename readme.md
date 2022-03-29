This repository is for completing the Mine Walker Challenge for Boise State CS 121

Minewalker description:
The user starts in the lower-left corner on a grid and walks to the upper right corner of the grid.

While avoiding mines.

UI Specs:

• A grid of tile is the main visual element
• Buttons

- Starting a new game
- a text field for the grid size
- buttons for showing and hiding the mines and levels for the current score number of lives as well as other optionals

• Plan on changing labels on the buttons and disabling them when it doesn't make sense to use them
• The grid size can not change while the game is going on.
• The show mines button should change to hide mines when it is clicked.

Creating the game : The New Game button creates a new game as follows.

• Generate a random walk from the lower left corner to the upper right corner
• 25% of the squares should be mines.
Game Play:
• At each step, the user can move one space North South East or West.
• If a user clicks on a tile that isn't vald, the program doesn't let them move there.
• The game hints at the number of mines nearby with the color

• Green there are zero mines in the four adjacent tiles
• Yellow there is one mine in the four adjacent tiles
• Orange there is two mines in the four adjacent tiles
• Red there is three mines in the four adjacent tiles

When the user wins notify the user with a pop up window
When the game is over show all the mines on the grid
Do not allow the user to play anymore unless they start a new game

Show current square by blinking the tile color or label

Scoring come up with a scoring scheme for

Scoring user starts with 100 points and loses a point each mine

show hide random walk across

have a color key
