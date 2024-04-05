let score = 0;
let displayScore = document.getElementById("score-id");
let leaderboard = [];

/** Determines the size of canvas depending on canvas_container width which is styled to 90vh. */
function resizeCanvas() {
    const canvas = document.getElementById('canvas');
    const container = document.getElementById('canvas_container');
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

/** Paints rules onto canvas.  */
function howToPlay() {
    const c = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    ctx.font =  "18px Holtwood One SC";
    ctx.fillStyle = "green";
    ctx.fillText("The rules are simple:", 5, 23);
    /** Wait 2.5 seconds before next line is shown */
    setTimeout(() => { ctx.fillText("click the green circle...", 5, 46); }, 2500);
    setTimeout(() => { ctx.fillText("as many times as you can...", 5, 69); }, 5000);
    setTimeout(() => { ctx.fillText("in 30 seconds!", 5, 92); }, 7500);
}

/** Calls nextTurn() and countdown(). Disables onClick events on all buttons. */
function playGame() {
    let playButton = document.getElementById("play-button");
    let howToPlayButton = document.getElementById("how-to-play-button");
    let leaderboardButton = document.getElementById("leaderboard-button");
    console.log(displayScore);
    displayScore.innerHTML = score;
    /** Scroll down to show full canvas */
    document.getElementById("score-id").scrollIntoView();
    nextTurn();
    countdown();
    playButton.disabled = true;
    howToPlayButton.disabled = true;
    leaderboardButton.disabled = true;
}

/** Subtracts 1 from timer-id inner HTML every second. Calls endGame() if timer reaches 0. */
function countdown() {
    let timer = document.getElementById("timer-id");
    let timeLeft = 30;

    let timeDown = setInterval(() => {
    if(timeLeft == 0) {
        timer.innerHTML = '30';
        clearInterval(timeDown);
        endGame();
    } else {
        timeLeft--;
        timer.innerHTML = timeLeft;
    }
}, 1000);
}

/** Clears canvas and calls drawCircle(). */
function nextTurn() {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    drawCircle();
}

/** Draws a circle of radius 25px onto canvas centrered at a random (x,y) co-ordinate. 
 * Listens for click event, checks if clickCircle() function is true.
 * If click is within circle area, add 1 to score and call nextTurn().
 * */
function drawCircle() {
    radius=25;
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    cWidth = c.width;
    cHeight = c.height;
    ctx.beginPath();
    let xCentre = radius+(Math.floor(Math.random() * (cWidth-2*radius)));
    let yCentre = radius+(Math.floor(Math.random() * (cHeight-2*radius)));
    console.log("circle: (" + xCentre + "," + yCentre + ")");
    ctx.arc(xCentre, yCentre, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();

    c.addEventListener('click', function handleClick(e) {
        let rect = e.target.getBoundingClientRect();
        const clickPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
        };
        console.log("click: (" + clickPos.x + "," + clickPos.y + ")");
        clickCircle(clickPos.x, clickPos.y, xCentre, yCentre, radius);
        if (clickCircle(clickPos.x, clickPos.y, xCentre, yCentre, radius)) {
            console.log('circle clicked');
            // Remove event listener to prevent multiple clicks
            canvas.removeEventListener('click', handleClick); 
            score++;
            displayScore.innerHTML = score;
            nextTurn();
        } else {
            console.log('circle not clicked');
        };
    });
}

/** Calculates whether click was within area of circle */
function clickCircle(xClick, yClick, xCircle, yCircle, radius) {
    distance = Math.sqrt((xClick - xCircle) ** 2 + (yClick - yCircle) ** 2);
    console.log(distance);
    return distance < radius;
}

/** Called when timer reaches 0.
 * Paints GAME OVER on the canvas.
 * Re-enables all buttons.
 * Calls inputName() function.
 */
function endGame() {
    let playButton = document.getElementById("play-button");
    let howToPlayButton = document.getElementById("how-to-play-button");
    let leaderboardButton = document.getElementById("leaderboard-button");
    endGame.called = true;
    const c = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    ctx.font =  "bold 50px Holtwood One SC";
    ctx.fillText("GAME", c.width/2 - 90, c.height/4);
    ctx.fillText("OVER", c.width/2 - 90, c.height/3);
    playButton.disabled = false;
    howToPlayButton.disabled = false;
    leaderboardButton.disabled = false;
    inputName();
}

/** Prompts user to input their name to the leaderboard.
 * Saves player name and score as an object in leaderboard array.
 * Resets score to 0 for next game.
 */
function inputName() {
    let playerName = window.prompt("Enter your name: ");
    if (playerName !== null && playerName !== "") {
        leaderboard.push({Name: playerName, Score: score});
    }
    console.log(leaderboard);
    score = 0;
    return;
}

/** Orders leaderboard array
 * Draws leaderboard onto canvas.
 */
function displayLeaderboard() {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    ctx.font =  "18px Holtwood One SC";
    ctx.fillStyle = "green";
    ctx.fillText("Leaderboard", 5, 23);

    leaderboard.sort((a, b) => b.Score - a.Score);

    for (let i = 0; i < leaderboard.length; i++) {
        const entry = leaderboard[i];
        const playerName = entry.Name; // Get the player's name
        const lastScore = entry.Score; 
        const text = `${playerName}: ${lastScore}`;
        ctx.fillText(text, 5, 23 * (i + 2));
    }
}