let xhr = new XMLHttpRequest();
const url = "https://api.chucknorris.io/jokes/random";
const resultDiv = document.querySelector(".result");
xhr.onreadystatechange = function (e) {
    console.log(xhr.readyState);
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
        let joke = JSON.parse(xhr.response);
        console.log(joke, joke.icon_url);
        resultDiv.innerHTML = joke.value + `<br><img src="${joke.icon_url}">`
    }
 }
xhr.open("GET", url);
xhr.send();
console.log(xhr);

// FETCH
document.querySelector(".fetch").addEventListener("click", getJoke)

function getJoke() {
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (data) {
        resultDiv.textContent = `fetch - ${data.value}`
    })
}

// get Random User
const getUserUrl = "https://randomuser.me/api/"
const userNumInput = document.querySelector(".users-input");
const getUserButton = document.querySelector(".users");

getUserButton.addEventListener("click", function getUser(e) {
    console.log(12312313);
    if (isNaN(userNumInput.value.trim())) {
        resultDiv.textContent = "숫자를 입력하세요"
        return;
    } else if (!userNumInput.value.trim().length) {
        resultDiv.textContent = "빈칸 입력은 안됩니다."
        return;
    }
    fetch(`${getUserUrl}?results=${userNumInput.value.trim()}`).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
        resultDiv.textContent = "";
        data.results.forEach((user) => {
            resultDiv.innerHTML = `${resultDiv.innerHTML}<br> ${user.name.first}`;
        })
    })
})


