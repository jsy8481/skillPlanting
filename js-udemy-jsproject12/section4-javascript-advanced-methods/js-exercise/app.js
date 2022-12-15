// Number, Math ...
let myNum1 = 1000.323232424124
let myNum2 = "100";

// Number - 문자열 숫자 변환 / parseInt - 정수만 뽑을 수 있음, 변환 못하면 nan / toFixed - 아랫자리 고정되게 문자열로 반환됨
console.log(myNum1);
console.log(myNum2);

// String
"Blue Whale".indexOf("Blue") // 해당 문자가 있는 인덱스 반환, 없으면 -1, 특정 인덱스 이후도 지정 가능해보임
"Blue Whale".indexOf("Blue") === -1 // 능 방법으로 있는지 판단 가능
// lastIndexOf - 역순 조회 최초로 마주치는 해당 문자열의 첫 인덱스 반환 / search - 정규 표현식 사용 가

let myStr = " Hello World Javascript 123 this works, I love Javascript ";
console.log(myStr.length) // 길이
console.log(myStr.trim().length) // trim으로 양 옆 공백 제거
console.log(myStr.toLowerCase()); // 소문자로
console.log(myStr.toUpperCase()); // 대문자로
console.log(myStr.split(" ")); // separator로 분리하며(세퍼레이터는 제외됨), array로 반환
console.log(myStr.charAt(0), myStr.charAt(1), myStr[0], myStr[1]); // 해당 인덱스의 문자 반환
console.log(myStr.slice(0), myStr.slice(0, 2)) // 시작 인덱스, 끝 인덱스 / 시작 인덱스는 포함하고, 끝 인덱스 전까지 가져옴 / 끝 인덱스가 없으면 끝까지 가져옴
console.log(myStr.substring(1, 2)) // slice와 비슷
console.log(myStr.replace("love", "enjoy"), myStr); // 해당 문자열을 교체, 실제 문자열을 변경하지는 않음

// Math
Math.floor(); // 정수 부분만 남김 - 기준 점 설정 가능하겠지
Math.ceil(); // 올림
Math.random() // 랜덤 숫자 만듬 - 0 ~ 1 / 특정 값을 곱해서 범위를 넓힘 (마지막 1을 포함하지 않음 - Math.floor(Math.random() * 3) -> 0, 1, 2 중 값이 나옴 )
// floor랑 조합하거나 해서 정수 랜덤 만들 수 있음

// min, max 값을 받아서 랜덤 데이터를 반환하도록, 다만 min은 포함되고, max는 포함되면 안된다.
function getRandomNumber(min, max) {
    const filteredMin = Math.ceil(min);
    const filteredMax = Math.floor(max);
    // 최솟값을 더하면, 최댓값 범위가 너무 커지니까, 그걸 고려해서 미리 덜 곱해놓자 - 곱하면 범위가 넓어지고, 더하면 움직인다.
    return Math.floor((Math.random() * (filteredMax - filteredMin)) + filteredMin);
 }

 // Array include and Ternary

const arr = [1, 5, 3, 7, 23, 2323];
console.log(arr.includes(644), arr.includes(5)); // 포함하면 true 아니면 false

function member(val) {
    return arr.includes(val) ? "yes" : "no";
}

function generateNumbers(min=1, max=20, num= 50, excludes=[10, 15, 7, 1, 4, 2, 5]) {
    for (let i = 0; i < 50; i++) {
        let randomNumber;
        while (true) {
            // 정수만 반환하니 1을 더해서 max도 포함시킨다.
            randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
            if (!excludes.includes(randomNumber)) {
                break
            }
        }
        console.log(randomNumber, i)
    }
}
// generateNumbers()

const excludesNums = [10, 15, 7, 1, 4, 2, 5]
// 재귀로 짰는데 이쁘네..!!
function solutionGenerateNumbers(min, max) {
    let num = Math.floor(Math.random() * (max+1 - min ) + min);
    return excludesNums.includes(num) ? solutionGenerateNumbers(min, max) : num;
}

// Array에서 무작위로 하나 꺼내오기
const targetArray = ["집에", "갈까", "공부", "해야", "더", "쉽게", "잘하지!"];

function getRandomItem(targetArray) {
    return targetArray[Math.floor(Math.random() * targetArray.length)]
}
console.log(getRandomItem(targetArray));

function changeRandomBodyBgColor() {
    document.body.style.backgroundColor = `rgb(${makeRandomNumber()},${makeRandomNumber()},${makeRandomNumber()})`
}
// Math.random -> Math.random().toString().substr(-6) // 랜덤한 여섯개 문자 생성 가능 / toString(16)을 주면 16진수됨
function makeRandomNumber(min = 0, max = 255) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
