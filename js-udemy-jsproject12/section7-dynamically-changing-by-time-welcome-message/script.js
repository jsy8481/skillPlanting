function showWelcomeMessage() {
    const date = new Date();
    const currentHour = date.getHours();
    const output = document.querySelector(".output");

    let welcomeMessage;
    if (currentHour > 17) {
        welcomeMessage = "Its evening"
        output.style.backgroundColor = "black";
    } else if (currentHour > 12) {
        welcomeMessage = "Its afternoon";
        output.style.backgroundColor = "blue"
    } else if (currentHour > 0) {
        welcomeMessage = "Its morning";
        output.style.backgroundColor = "red"
    } else {
        welcomeMessage = "Something is wrong"
    }

    output.innerHTML = welcomeMessage;

    console.log(date.getHours());
}

const button = document.querySelector("button");
button.addEventListener("click", showWelcomeMessage);
