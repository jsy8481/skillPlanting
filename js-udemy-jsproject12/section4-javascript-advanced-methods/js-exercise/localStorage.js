const localStorageKey = "enterUser";

// null은 0이 되는구나..!!
const localStorageValue = localStorage.getItem(localStorageKey);

if (!(localStorageValue == null)) {
    localStorage.setItem(localStorageKey, Number(localStorageValue) + 1);
} else {
    localStorage.setItem(localStorageKey, 0);
}
console.log(localStorageValue);

