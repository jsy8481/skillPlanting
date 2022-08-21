let mile = prompt("킬로미터로 변환할 마일을 입력하세요");

try {
    console.log(`${mile} Miles is ${Number(mile) * 1.6093}`)
} catch (e) {
    alert(e);
}
