var score = 0;
var displayScore = document.getElementById("score-id");
var leaderboard = [];

function resizeCanvas() {
    const canvas = document.getElementById('canvas');
    const container = document.getElementById('canvas_container');
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    console.log(canvas.width, canvas.height);
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

function playGame() {
    var playButton = document.getElementById("play-button");
    var howToPlayButton = document.getElementById("how-to-play-button");
    var leaderboardButton = document.getElementById("leaderboard-button");
    console.log(displayScore);
    displayScore.innerHTML = score;
    nextTurn();
    countdown();
    playButton.disabled = true;
    howToPlayButton.disabled = true;
    leaderboardButton.disabled = true;
}

function endGame() {
    var playButton = document.getElementById("play-button");
    var howToPlayButton = document.getElementById("how-to-play-button");
    var leaderboardButton = document.getElementById("leaderboard-button");
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

function countdown() {
    let timer = document.getElementById("timer-id");
    var timeLeft = 30;

    var timeDown = setInterval(() => {
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

function nextTurn() {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    drawCircle();
}

function drawCircle() {
    radius=25;
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    cWidth = c.width;
    cHeight = c.height;
    console.log(cWidth, cHeight);
    ctx.clearRect(0,0,cWidth,cHeight);
    ctx.beginPath();
    let xCentre = radius+(Math.floor(Math.random() * (cWidth-2*radius)));
    let yCentre = radius+(Math.floor(Math.random() * (cHeight-2*radius)));
    console.log("circle: (" + xCentre + "," + yCentre + ")");
    ctx.arc(xCentre, yCentre, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();

    c.addEventListener('click', function handleClick(e) {
        var rect = e.target.getBoundingClientRect();
        const clickPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
        };
        console.log("click: (" + clickPos.x + "," + clickPos.y + ")");
        clickCircle(clickPos.x, clickPos.y, xCentre, yCentre, radius);
        if (clickCircle(clickPos.x, clickPos.y, xCentre, yCentre, radius)) {
            console.log('circle clicked');
            canvas.removeEventListener('click', handleClick); // Remove event listener to prevent multiple clicks
            score++;
            displayScore.innerHTML = score;
            nextTurn(); // Start the next round if less than a minute has passed
        } else {
            console.log('circle not clicked');
        };
    });
}

function clickCircle(xClick, yClick, xCircle, yCircle, radius) {
    distance = Math.sqrt((xClick - xCircle) ** 2 + (yClick - yCircle) ** 2);
    console.log(distance);
    return distance < radius;
}

function howToPlay() {
    const c = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    ctx.font =  "18px Holtwood One SC";
    ctx.fillStyle = "green";
    ctx.fillText("The rules are simple:", 5, 23);
    setTimeout(() => { ctx.fillText("click the green circle...", 5, 46); }, 2500);
    setTimeout(() => { ctx.fillText("as many times as you can...", 5, 69); }, 5000);
    setTimeout(() => { ctx.fillText("in 30 seconds!", 5, 92); }, 7500);
}

function inputName() {
    let playerName = window.prompt("Enter your name: ");
    if (playerName !== null && playerName !== "") {
        leaderboard.push({Name: playerName, Score: score});
    }
    console.log(leaderboard);
    score = 0;
    return;
}

function displayLeaderboard() {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    ctx.font =  "18px Holtwood One SC";
    ctx.fillStyle = "green";
    ctx.fillText("Leaderboard", 5, 23);

    let yOffset = 0;
    for (let i = 0; i < leaderboard.length; i++) {
        const entry = leaderboard[i];
        const text = `${entry.Name}: ${entry.Score}`;
        ctx.fillText(text, 5, 23 * (i + 2) + yOffset);
        yOffset += 20; // Increase vertical offset for the next entry
    }
}