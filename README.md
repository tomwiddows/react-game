# REACT! Game by Thomas Widdows

https://tomwiddows.github.io/react-game/ <br>
![am i responsive test](/assets/images/amiresponsive.png)

## Website Goals

### Customer Goals

- Have fun playing a competitive game
- Be provided instructions on how to play
- Play solo or with multiple players, on a turn-by-turn basis
- Input names of players and record scores separately under each name
- Have minimal number of clicks before game starts and between games
- Continue to be challenged further to increase joy and reward

### Business Goals

- Create a fun and easy-to-play game
- Use bright colours and large block text to emulate retro style arcade games
- Make game more difficult over time to maximise user retention
-

## User Experience

### Potential Users

- People looking for simple fun games on the internet
- People trying to improve their reaction time
- People studying JavaScript who want to learn from this code
- Groups of friends/family that like competing against each other

### User Stories

__New/Returning User__

- I want to know what the site is about
- I want the site navigation to be intuitive and quick
- I want to have fun
- I want to know who wins and/or my score
- I want the site to look fun

__Site Administrator__

- The page should be easily manageable
- The code should be well commented
- The code should contain safeguards to prevent the user from breaking the game intentionally or unintiaonally

### Wireframes

<img src="/assets/images/large-wireframe.png" height="300px">  <img src="/assets/images/small-wireframe.png" height="300px">

The colour scheme chosen for the canvas and background must contrast. I want the canvas to be brighter than the background. 
There are three buttons required; How to play, play and leaderboard, which are arranged linearly and equally spread across the screen horizontally. Below these are the score counter and 30 second timer.
The Canvas fills a large propoertion of the screen to maximise visibility and difficulty. 

### Features

<img src="/assets/images/play-feature.png" height="300px">

__Holtwood One SC font:__ Chosen for its full capitalisation, strong serifs and bold, blocky nature. Reminiscent of arcade-style game fonts.

__Change button text color on hover:__ Provides user with feedback - shows the element has a function.

<img src="/assets/images/how-to-play.png" height="300px">

__How to play button:__ Displays rules within canvas line-by-line.

<img src="/assets/images/game-run.png" height="300px">

__Scroll down when play button pressed:__ Displays full canvas so bottom segment is not hidden.

__drawCircle()__ Draws a circle of radius 25px onto canvas centrered at a random (x,y) co-ordinate.

__countdown()__ Subtracts 1 from timer-id inner HTML every second. Calls endGame() if timer reaches 0.

__Score counter:__ Increases by 1 each time a click is registered within the area of the green circle. 

<img src="/assets/images/enter-name.png" height="300px">

__Enter name prompt:__ Once timer reaches 0, player is prompted to enter their name. The name and score will be stored as an object in the leaderboard array.

<img src="/assets/images/game-over.png" height="300px">

__Game over text:__ Displayed centrally within canvas after prompt is exited.

<img src="/assets/images/leaderboard.png" height="300px">

__Leaderboard:__ Displays names and scores of games since last refresh from highest to lowest.

## Tools & Technologies used

__HTML__ used for page structure.
__CSS__ used for styling.
__JavaScript__ used for interactivity.
__Google Fonts__ used for styling text.
__Favicon.ico__ used to design tab icon.
__Git commands__ used for version control. (git add, git commit, git push)
__GitHub__ used for secure online code storage.
__GitPod__ used as a cloud IDE for development.
__Pencil__ used for wireframes.

## Deployment

This site was deployed to GitHub Pages.

## Citations
|Link|Use|
|https://lavrton.com/hit-region-detection-for-html5-canvas-and-how-to-listen-to-click-events-on-canvas-shapes-815034d7e9f8/| Provided soltution to clicking canvas region covered by circle at pos (x,y) of radius r|
|https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect| Function to clear canvas|
|https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect| Function to retreive element size data|
|https://owumaro.github.io/text-stroke-generator/| Website for styling text with a solid outline using text-shadow rule|
|https://www.w3schools.com/graphics/canvas_text.asp| Info on adding text to canvas|
|https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView| Used to scroll to fit canvas at start of each game|