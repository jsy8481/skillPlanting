let x = 20;
const targetDiv = document.querySelector(".target");

const downValue = setInterval(() => {
    targetDiv.textContent = x--;
    if (x < 0) {
        clearInterval(downValue);
    }
}, 100)
