var score = 0;
var displayScore = document.getElementById("score-id");

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
    console.log(displayScore);
    displayScore.innerHTML = score;
    nextTurn();
    countdown();
}

/** 
function endGame() {
    // Display GAME OVER on canvas. post score to leaderboard
}*/

function countdown() {
    let timer = document.getElementById("timer-id");
    var timeLeft = 30;

    var timeDown = setInterval(() => {
    if(timeLeft == 0) {
        timer.innerHTML = 'Game Over';
        clearInterval(timeDown);
        //endGame();
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
};

function clickCircle(xClick, yClick, xCircle, yCircle, radius) {
    distance = Math.sqrt((xClick - xCircle) ** 2 + (yClick - yCircle) ** 2);
    console.log(distance);
    return distance < radius;
};

