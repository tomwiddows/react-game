function drawCircle() {
    radius=50;
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0,0,500,350);
    ctx.beginPath();
    let xCentre = radius+(Math.floor(Math.random() * (500-2*radius)));
    let yCentre = radius+(Math.floor(Math.random() * (350-2*radius)));
    ctx.arc(xCentre, yCentre, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    
    c.addEventListener('click', (e) => {
        var rect = e.target.getBoundingClientRect();
        const clickPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
        };
        clickCircle(clickPos.x, clickPos.y, xCentre, yCentre, radius);
        if (clickCircle(clickPos.x, clickPos.y, xCentre, yCentre, radius)) {
            console.log('circle clicked');
        } else {
            console.log('circle not clicked');
        };
    });
}

function clickCircle(xClick, yClick, xCircle, yCircle, radius) {
    if (Math.sqrt((xClick - xCircle) ** 2 + (yClick - yCircle) ** 2) < radius) {
        return true;
        nextRound();
    };
    
}

function nextRound() {

}