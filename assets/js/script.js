function drawCircle() {
    radius=50;
    const c = document.getElementById("myCanvas");
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

function clickCircle(clickX, clickY, xCircle, yCircle, radius) {
    return Math.sqrt((clickX - xCircle) ** 2 + (clickY - yCircle) ** 2) < radius;
}