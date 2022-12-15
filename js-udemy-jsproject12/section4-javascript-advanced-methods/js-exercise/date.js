const d = new Date();
console.log(d); // 현재 날짜 정보
console.log(Date.now()) // 현재 타임스탬프
console.log(new Date(2022, 11, 6, 17, 58, 8, 0)) // 연, 월(0~11), 일, 시, 분, 초, 밀리
console.log(new Date(0), new Date(Date.now())); // 1970년 Jan 01 부터 지난 밀리세컨드 - Date.now()와 함께 쓰면 현재 데이트로 변환할 수 있겠구나
console.log(d.toDateString())
console.log(new Date("2020/12/31"), new Date("2020-12-31")); // date를 정의하는 여러 방법

console.log(d.getDate(), d.getDay(), d.getTime(), d.getMilliseconds()); // 일, 일주일 중 어디에 해당 (일요일 부터 해당인 듯), 현재 타임스탬프, 밀리초 가져오기
console.log(d.getHours(), d.getUTCHours()); // Hour로 하면 local, getUTCHour로 하면 universal

let days = 1;
const newDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000); // 현재부터 지난 날짜를 더해주나보네
console.log(newDate);
console.log(new Date("1994-04-08").getTime());

// JSON
const myObj = {
    first: "Laurence",
    second: "test",
}

const JsonTest = JSON.stringify(myObj);
console.log(JsonTest, JSON.parse(JsonTest));``
