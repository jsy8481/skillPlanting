const targetDiv = document.createElement("div");
targetDiv.style.width = "100px";
targetDiv.style.height = "100px";
targetDiv.style.backgroundColor = "red";
targetDiv.style.position = "absolute";

document.addEventListener("DOMContentLoaded", function (e) {
    document.body.appendChild(targetDiv);
});

const speed = 15;

function addSpeed(position, direction = 1) {
    let currentPosition = position;
    if (!currentPosition) {
        currentPosition = "0px";
    }
    return `${Number(currentPosition.slice(0, -2)) + speed * direction}px`;
}

document.addEventListener("keydown", function (e) {
    if (e.code === "ArrowRight") {
        targetDiv.style.left = addSpeed(targetDiv.style.left, 1);
    }
    if (e.code === "ArrowLeft") {
        targetDiv.style.left = addSpeed(targetDiv.style.left, -1);
    }
    if (e.code === "ArrowUp") {
        targetDiv.style.top = addSpeed(targetDiv.style.top, -1);
    }
    if (e.code === "ArrowDown") {
        targetDiv.style.top = addSpeed(targetDiv.style.top, 1);
    }
})
