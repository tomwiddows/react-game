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
}