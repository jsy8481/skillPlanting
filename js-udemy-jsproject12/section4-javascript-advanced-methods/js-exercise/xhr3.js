const resultDiv = document.querySelector(".result");

const url = "https://jsonplaceholder.typicode.com/todos";
loadJSON();

function loadJSON() {
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        for (let x = 0; x < data.length; x++) {
            let div = document.createElement("div");

            if (data[x].completed) {
                div.style.color = "red";
            } else {
                div.style.color = "green";
            }
            div.textContent = `${x + 1}. ${data[x].title}`;
            document.body.appendChild(div);
        }
    })
}
