var round = 0;

function playGame() {
    var startTime = Date.now();
    nextRound(startTime);
}

function nextRound(startTime) {
    var round = 0;
    round++;
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    drawCircle(startTime);
    return round;
};

function drawCircle(startTime) {
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

    let clicked = false;
    
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
    distance = Math.sqrt((xClick - xCircle) ** 2 + (yClick - yCircle) ** 2);
    console.log(distance);
    return distance < radius;
};

