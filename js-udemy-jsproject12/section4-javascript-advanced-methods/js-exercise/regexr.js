let myStr = "Hello World Javascript 123 this works i love Javascript 44dfdff f";
let reg = /(\w+)\s(\w+)/;
let temp1 = myStr.replace("Hello", "People");
console.log(temp1)

let temp2 = myStr.replace(reg, "Bye");
console.log(temp2)
console.log(myStr.match(/J/));
console.log(myStr.match(/J/gi)); // g만 쓰면 찾아만 주고(찾은 뒤 값을 반환해 줌) / i를 쓰면 위치정보까지 알 수 있음
console.log(/Javascript/.test(myStr)); // 여부를 알 수 있음
console.log(/d+/.exec(myStr)); // 값 정보를 다 얻어올 수 있음
