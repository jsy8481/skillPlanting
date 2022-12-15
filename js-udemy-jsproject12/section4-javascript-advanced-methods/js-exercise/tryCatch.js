const input = document.createElement("input");
input.setAttribute("type", "text");
document.body.appendChild(input);

const button = document.createElement("button");
button.textContent = "입력하기";
document.body.appendChild(button);

const messageDiv = document.createElement("div");
document.body.appendChild(messageDiv);

button.addEventListener("click", function (e) {
    try {
        if (isNaN(input.value.trim())) {
            throw "숫자를 입력하세요";
        } else if (!input.value.trim()) {
            throw "값을 입력하세요";
        } else {
            throw Number(input.value.trim()) * 10;
        }
    } catch (e) {
        messageDiv.textContent = e;
    }
})
