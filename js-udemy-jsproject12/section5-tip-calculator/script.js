const submitButton = document.querySelector("button");
const output = document.querySelector(".output");
const cost = document.querySelector("input[type=number]")
console.log(cost);

submitButton.addEventListener("click", function () {
    console.log("click");
    console.log(cost.value * 0.15);
    const tip = (cost.value * 0.15).toFixed(2);
    output.innerHTML = `<h1>You Should tip $${tip} on $${cost.value}</h1>`;
});
