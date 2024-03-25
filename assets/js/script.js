var round = 0;

function playGame() {
    var startTime = Date.now();
    nextRound(startTime);
}

function nextRound(startTime) {
    var round = 0;
    round++;
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle(startTime);
    return round;
};

function drawCircle(startTime) {
    radius=25;
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0,0,500,350);
    ctx.beginPath();
    let xCentre = radius+(Math.floor(Math.random() * (500-2*radius)));
    let yCentre = radius+(Math.floor(Math.random() * (350-2*radius)));
    ctx.arc(xCentre, yCentre, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();

    let clicked = false;
    
    c.addEventListener('click', function handleClick(e) {
        var rect = e.target.getBoundingClientRect();
        const clickPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
        };
        clickCircle(clickPos.x, clickPos.y, xCentre, yCentre, radius);
        if (clickCircle(clickPos.x, clickPos.y, xCentre, yCentre, radius)) {
            console.log('circle clicked');
            canvas.removeEventListener('click', handleClick); // Remove event listener to prevent multiple clicks
            if (Date.now() - startTime < 30000) {
                nextRound(startTime); // Start the next round if less than a minute has passed
            } else {
                console.log("Game Over"); // Output "Game Over" after one minute
            }
        } else {
            clicked = false;
            console.log('circle not clicked');
        };
    });
};

function clickCircle(xClick, yClick, xCircle, yCircle, radius) {
    return Math.sqrt((xClick - xCircle) ** 2 + (yClick - yCircle) ** 2) < radius;
};

